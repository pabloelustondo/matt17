/**
 * Created by pabloelustondo on 2016-11-21.
 */
import { Injectable } from '@angular/core';
import { MattTodoListSample } from "../model/todolistsample"
import { MattModel } from "../model/mattmodel";
import { MattDataService } from "./data.service";


describe('MattDataService', () => {
  let service: MattDataService;
  beforeEach(() => { service = new MattDataService(); });

  it('returns ', done => {
    service.getData().then(value => {
      expect(value.allTodos.length).toBe(MattTodoListSample.length);
      done();
    });
  });

});




