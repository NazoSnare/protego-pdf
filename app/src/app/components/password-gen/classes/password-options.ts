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

export class PasswordOptions {
  public lowerCase: boolean;
  public upperCase: boolean;
  public numbers: boolean;
  public specialChars: boolean;
  public passwordLength: number;

  public static equal(left: PasswordOptions, right: PasswordOptions): boolean {
    if (left === undefined || right === undefined) {
      return false;
    }

    return left.lowerCase === right.lowerCase &&
           left.upperCase === right.upperCase &&
           left.numbers === right.numbers &&
           left.specialChars === right.specialChars &&
           left.passwordLength === right.passwordLength;
  }
}
