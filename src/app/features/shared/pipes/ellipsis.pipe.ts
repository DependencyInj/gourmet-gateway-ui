import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string, cutAt: number): unknown {
    return value?.length > cutAt ? `${value?.slice(0,cutAt)}...`: value;
  }

}
