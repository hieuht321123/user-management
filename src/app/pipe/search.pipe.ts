import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/users';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: User[], seachValue: string): any {
    console.log('user: ', users);
    if(!users || !seachValue)
    {
      return users;
    }
    return users.filter(user =>
      user.email?.toLocaleLowerCase().includes(seachValue.toLocaleLowerCase())
    );
  }

}
