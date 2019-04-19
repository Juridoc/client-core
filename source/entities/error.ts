/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Error entity class.
 */
@RestDB.Schema.Entity('error')
@Class.Describe()
export class Error extends Class.Null {
  /**
   * Error code.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public code!: number;

  /**
   * Error text.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public text!: string;
}
