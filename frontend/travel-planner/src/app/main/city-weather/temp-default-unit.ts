import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "tempDefaultUnit"})
export class TempDefaultUnit implements PipeTransform {
    transform(value: number, ...args: any[]): string {
        return `${(value - 273.15).toFixed(0)} C`;
    }
}