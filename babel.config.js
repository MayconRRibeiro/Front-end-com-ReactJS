// Arquivo que vai conter as configurações isoladas relacionadas ao babel.
// Maneira em que um código JS é convertido para um código em que o Browser entenda.
module.exports = {
  // Conjuntos de configurações criadas por terceiros
  presets: [
    // Vai no browser verificar as últimas funcionalidades dos browsers para
    // identificar as funcionalidades que os browser ainda não entendem e
    // converter essas funcionalidades de maneira que os browsers entendam.

    // Ele entende o ambiente em que sua aplicação esta sendo executada
    // e vai converter o código baseada apenas no ambiente.
    '@babel/preset-env',
    // Adiciona as funcionalidades do react na conversão, convertendo código
    // JSX de maneira que o browser entenda.
    '@babel/preset-react',
  ],
};
