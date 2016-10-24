
import {assert} from 'chai';
import settings from './settings';

describe ( 'settings', function () {

  it ( 'Works as expected', function () {

    assert.isTrue ( false );

  })

  describe ( 'isTest2', function () {

    assert.isFalse ( settings.isTest2 () );

  });

});
