declare module '*.md' {
  const value: any;
  export = value;
}

// hack to fix the Cannot find module [your module] or its corresponding type declarations ts(2307)
// https://graffino.com/til/hEvDjQa4au-how-to-import-images-in-typescript