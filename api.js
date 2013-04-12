/*
 * Copyright 2013 Jive Software
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

/////////////////////////////////////////////////////////////////////////////
// persistence
exports.persistence = {
    'file' : require('./persistence/file'),
    'memory' : require('./persistence/memory'),
    'mongo' : require('./persistence/mongo')
};

/////////////////////////////////////////////////////////////////////////////
// configuration
exports.config = require('./lib/config');

/////////////////////////////////////////////////////////////////////////////
// applications
exports.applications = new (require('./lib/applications'));

/////////////////////////////////////////////////////////////////////////////
// external streams
var extstreamsDefinitions = require('./lib/extstreamsDefinitions');
var extstreams = new (require('./lib/extstreams'));
extstreams['definitions'] = new extstreamsDefinitions();
exports.extstreams = extstreams;

/////////////////////////////////////////////////////////////////////////////
// tiles
var tileDefinitions = require('./lib/tilesDefinitions');
var tiles = new (require('./lib/tiles'));
tiles['definitions'] = new tileDefinitions();
exports.tiles = tiles;

/////////////////////////////////////////////////////////////////////////////
// tasks
exports.tasks = require('./lib/tasks');