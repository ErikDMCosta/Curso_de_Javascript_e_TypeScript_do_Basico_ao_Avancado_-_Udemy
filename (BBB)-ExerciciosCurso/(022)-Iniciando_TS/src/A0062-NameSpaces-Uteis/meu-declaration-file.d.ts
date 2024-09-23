declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MYGLOBAL: string;
  }
}

declare const global: typeof globalThis & {
  MYGLOBAL: string;
};
