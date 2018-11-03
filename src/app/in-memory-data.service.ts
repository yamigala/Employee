import { InMemoryDbService } from 'angular-in-memory-web-api';
/**
 * fakebackend service using in-memory-web-api
 */
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const emp = [ 
          { id : 1, name : "Yami" , age : 21 , designation : "developer" , joiningDate : "1/10/2018"},
          { id : 2, name : "tina" , age : 22 , designation : "HR" , joiningDate : "10/10/2018"}
      ];
      return {emp};
    }
}