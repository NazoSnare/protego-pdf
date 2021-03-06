/**
 * Copyright (C) 2018 Bernardo Balvanera
 *
 * This file is part of ProtegoPdf.
 *
 * ProtegoPdf is a free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import * as fs from 'fs';
import * as typescript from 'gulp-typescript';
import * as gulp from 'gulp';

function buildElectron() {
  return gulp.src(['src/electron/**/*.ts', '!src/electron/**/EventArgs.ts'])
      .pipe(typescript())
      .pipe(gulp.src(['src/package.json']))
      .pipe(gulp.dest('dist/'));
}

export = buildElectron;
