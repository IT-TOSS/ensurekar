// types/odometer.d.ts
declare module 'odometer' {
  interface OdometerOptions {
    el: HTMLElement;    // The HTML element where the odometer will be rendered
    value?: number;     // The initial value of the odometer (optional)
    format?: string;    // The format string (optional)
    theme?: string;     // Theme for the odometer, like 'default' (optional)
    duration?: number;  // Animation duration in milliseconds (optional)
  }

  class Odometer {
    constructor(options: OdometerOptions); // Constructor accepts OdometerOptions
    update(newValue: number): void;        // Method to update the value
  }

  export = Odometer;
}
