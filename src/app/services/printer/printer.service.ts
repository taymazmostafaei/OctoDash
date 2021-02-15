import { Injectable } from '@angular/core';

@Injectable()
export abstract class PrinterService {
  abstract executeGCode(gCode: string): void;

  abstract jog(x: number, y: number, z: number): void;

  abstract extrude(amount: number, speed: number): void;

  abstract setTemperatureHotend(temperature: number): void;

  abstract setTemperatureBed(temperature: number): void;

  abstract setFeedrate(feedrate: number): void;

  abstract setFlowrate(flowrate: number): void;

  abstract disconnectPrinter(): void;

  abstract emergencyStop(): void;

  abstract setFanSpeed(percentage: number): void;
}
