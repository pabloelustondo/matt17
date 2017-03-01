/**
 * Created by pabloelustondo on 2016-11-21.
 */
import { Injectable } from '@angular/core';
import { MattTodoListSample } from "../model/todolistsample"
import { MattModel } from "../model/mattmodel";

@Injectable()
export class MattDataService {

  constructor() { }

  getDataNow(): Promise<MattModel> {
    return new Promise(
      (resolve, reject) => {
        let mattTodoList = new MattModel(MattTodoListSample);
          resolve(mattTodoList);
      }
    )
  }

  getData(): Promise<MattModel> {
      return new Promise(
          (resolve, reject) => {
            let mattTodoList = new MattModel(MattTodoListSample);
            setTimeout(function(){
              resolve(mattTodoList);
            }, 1000);
          }
      )
  }
}


