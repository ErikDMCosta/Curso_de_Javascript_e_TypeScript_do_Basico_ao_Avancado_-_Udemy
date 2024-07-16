// Encontra todas as palavras
const palavrasRegEx = /([\wÀ+ú]+)/;

// Não Números
const naoNumerosRegEx = /\D/;

// Valida IP
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valida CPF
const cpfRegExp = /\(?:\d{3}\.){2}\d{3}-\d{2}/g;

// Valida Telefones
const telefoneRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/;

// Valida Senhas Fortes
const validaSenhasFortesRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%¨&*]\]).{8.}$/;

// # Validar e-mails (use a última) #

// [^\s]+@[^\s]+\.[^\s]+(\w+)* (Hiper Permissiva)
// [^\s\.]+\.?[^\s\.]+@[^\s]+\.[^\s]+\w+
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const validaEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
