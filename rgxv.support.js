"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "rgxv",
              			"path": "rgxv/rgxv.js",
              			"file": "rgxv.js",
              			"module": "rgxv",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/rgxv.git",
              			"test": "rgxv-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Validate regex pattern on string.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var falzy = require("falzy");
var stringe = require("stringe");

var rgxv = function rgxv(pattern, string) {
	/*;
                                           	@meta-configuration:
                                           		{
                                           			"pattern:required": [
                                           				RegExp,
                                           				"string"
                                           			],
                                           			"string:required": "string"
                                           		}
                                           	@end-meta-configuration
                                           */

	if (falzy(pattern)) {
		return false;
	}

	if (!(pattern instanceof RegExp) && typeof pattern == "string") {
		pattern = new RegExp(pattern);
	}

	if (!(pattern instanceof RegExp)) {
		return false;
	}

	if (falzy(string) || typeof string != "string") {
		string = stringe(string);
	}

	try {
		return pattern.test(string);

	} catch (error) {
		return false;
	}
};

module.exports = rgxv;

//# sourceMappingURL=rgxv.support.js.map