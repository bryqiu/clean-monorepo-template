/** 密码强度正则(以字母开头，长度在6~18之间，只能包含字母、数字和下划线) */
export const PASSWORD_STRENGTH = /^[a-z]\w{5,17}$/i
