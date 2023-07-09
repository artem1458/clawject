export enum DITypeFlag {
  UNSUPPORTED = -1,

  //BASE
  ANY,
  UNKNOWN,
  NEVER,
  VOID,
  UNDEFINED,
  NULL,
  STRING,
  NUMBER,
  BOOLEAN,
  ENUM,
  BIGINT,

  //LITERALS
  STRING_LITERAL,
  NUMBER_LITERAL,
  BOOLEAN_LITERAL,
  ENUM_LITERAL,
  BIGINT_LITERAL,

  //COMPLEX
  OBJECT,
  UNION,
  INTERSECTION,
  TUPLE,
}
