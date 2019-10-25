interface ShinyType {
  setInputValue: (key: string, value: string | Record<string, unknown>) => void;
  addCustomMessageHandler: (
    key: string,
    fn: (val?: string | number) => void
  ) => void;
}

declare global {
  interface Window {
    Shiny: ShinyType;
    jQuery: JQueryStatic;
    jster: (timeout: number) => void;
  }
}

const Shiny: ShinyType = window.Shiny;

const jQuery: JQueryStatic = window.jQuery;

export { Shiny, jQuery, jQuery as $ };
