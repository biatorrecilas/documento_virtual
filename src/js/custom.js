function updateNavbarLogo() {
    const logo = document.querySelector('.navbar__logo img');
    const isDarkTheme = document.body.classList.contains('dark-theme');
  
    // Atualiza a fonte da imagem do logo
    logo.src = isDarkTheme ? '/img/HAPPDINE2.svg' : '/img/HAPPDINE.svg';
}
  
  // Atualiza o logo no carregamento da página
document.addEventListener('DOMContentLoaded', updateNavbarLogo);
  
  // Escuta mudanças no tema
document.body.addEventListener('theme:changed', updateNavbarLogo);
  