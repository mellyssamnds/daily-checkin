const authSection = document.getElementById('auth-section');
const appSection = document.getElementById('app-section');
const periodSection = document.getElementById('period-section');
const message = document.getElementById('message');
const title = document.querySelector('.auth-title');
const submitBtn = document.getElementById('email-login');
const toggleAuth = document.getElementById('toggle-auth');

let isSignUp = false;
let user = null;

document.getElementById('email-login').onclick = () => {
  user = { name: 'Usuário Teste' };
  login();
};

document.getElementById('google-login').onclick = () => {
  user = { name: 'Usuário Google' };
  login();
};

document.getElementById('forgot-password').onclick = () => {
  alert('Password reset flow coming soon 👀');
};

document.getElementById('logout').onclick = () => {
  user = null;
  authSection.classList.remove('hidden');
  appSection.classList.add('hidden');
};

document.querySelector('.yes').onclick = () => {
  periodSection.classList.remove('hidden');
  message.textContent = '';
};

document.querySelector('.no').onclick = () => {
  periodSection.classList.add('hidden');
  message.textContent = 'Que pena 😔';
};

document.querySelectorAll('.period').forEach(btn => {
  btn.onclick = () => {
    message.textContent = 'AEEEEEEEEEEEEEEE CARAI 🥳';
    periodSection.classList.add('hidden');
  };
});

function login() {
  authSection.classList.add('hidden');
  appSection.classList.remove('hidden');
  document.getElementById('user-name').textContent = `Olá, ${user.name}`;
}

toggleAuth.onclick = () => {
  isSignUp = !isSignUp;

  if (isSignUp) {
    title.textContent = 'Criar uma conta';
    submitBtn.textContent = 'Cadastre-se';
    toggleAuth.textContent = 'Entrar';
  } else {
    title.textContent = 'Welcome back';
    submitBtn.textContent = 'Entrar';
    toggleAuth.textContent = 'Cadastre-se';
  }
};