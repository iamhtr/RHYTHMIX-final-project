// filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter((item) => {
      // Customize the condition based on your data structure
      return item.Artist.toLowerCase().includes(searchText);
    });
  }
}
