/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import { Owner } from './owner';

/**
 * Identity entity class.
 */
@RestDB.Schema.Entity('identity')
@Class.Describe()
export class Identity extends Owner {
  /**
   * User Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public userId!: string;

  /**
   * IP address.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public address!: string;
}
