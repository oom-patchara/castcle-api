/*
 * Copyright (c) 2021, Castcle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 * 
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 3 only, as
 * published by the Free Software Foundation.
 * 
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License
 * version 3 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 * 
 * You should have received a copy of the GNU General Public License version
 * 3 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 * 
 * Please contact Castcle, 22 Phet Kasem 47/2 Alley, Bang Khae, Bangkok, 
 * Thailand 10160, or visit www.castcle.com if you need additional information 
 * or have any questions.
 */

import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('metadata')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hashtags')
  getHashtags(@Req() request: Request) {

    
    // INFO: As for this demo we don't implement protected route and JWT strategy guards
    // so this is just get bearer token from the request
    const jwt = request.headers.authorization;
    console.log('JWT token:', jwt);

    // pass accept-language to getHashtags method 
    const locale = request.headers['accept-language'] ? request.headers['accept-language'] : null;
    // pass accept-version to getHashtags method if exist, otherwise set default version=1.0
    const ver = request.headers['accept-version'] ? request.headers['accept-version'] : '1.0';

    return this.appService.getHashtags(locale, ver);
  }
}
