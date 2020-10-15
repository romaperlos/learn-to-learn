import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
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
      }, "Электронный адрес должен соответствовать шаблону",
    ],
  },
  password: {
    type: String,
    required: [true, "Не забудьте указать пароль, пожалуйста"],
  },
  registrationDate: {
    type: String,
    default: new Date(new Date().getTime() + 3 * 3600 * 1000).toUTCString().replace(/ GMT$/, ''),
  },
});


userSchema.static('isUserUnique', async function(username) {
  const user = await this.findOne({ username });

  if (user) {
    return `Имя "${username}" уже занято`;
  }
  return false;
});
userSchema.static('isEmailUnique', async function(email) {
  const user = await this.findOne({ email });
  if (user) {
    return `Адрес "${email}" уже занят`;
  };
  return false;
});

userSchema.post('save', (error, doc, next) => {
  const message = error.toString();
  
  if (message.indexOf('username') != -1 && error.code === 11000) {
      next({ message: 'Такой пользователь уже существует' });
  } else if (message.indexOf('email') != -1 && error.code === 11000) {
    next({ message: 'Такой адрес email уже зарегистрирован' });
  }
  else next(error);
});

export default mongoose.model('User', userSchema);
