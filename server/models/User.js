import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: [
      function (email) {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email);
      }, 'Электронный адрес должен соответствовать шаблону',
    ],
  },
  password: {
    type: String,
    required: [true, 'Не забудьте указать пароль, пожалуйста'],
  },
  registrationDate: {
    type: String,
    default: new Date(new Date().getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, ''),
  },
  isAdmin: {
    type: Boolean,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
});

userSchema.static('isEmailUnique', async function (email) {
  const user = await this.findOne({ email });
  console.log(user);
  if (user) {
    return `Адрес "${email}" уже занят`;
  }
  return false;
});

userSchema.post('save', (error, doc, next) => {
  const message = error.toString();
  if (message.indexOf('email') !== -1 && error.code === 11000) {
    next({ message: 'Такой адрес email уже зарегистрирован' });
  } else next(error);
});

export default mongoose.model('User', userSchema);
