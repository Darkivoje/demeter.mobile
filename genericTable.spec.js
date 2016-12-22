describe('table ', function () {
    var $compile,
        $rootScope,
        compiled;

    beforeEach(module('templates'));
    beforeEach(module('proteus.genericTable'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        compiled = null;
        $compile = _$compile_;
        $rootScope = _$rootScope_;

    }));

    it('should not show a table if no data is given', function () {
        createEmptyElement();
        expect(compiled.find('table').length).toBe(0);
    });

    it('should present the value of the property of a passed object inside of an array', function () {
        var data = [{
            myTestProperty: 'test'
        }];
        createElementWithData(data);
        expect(compiled.text().indexOf(data[0].myTestProperty)).toBeGreaterThan(-1);
    });

    it('should not present the name of the property of a paased object inside of an array', function () {
        var data = [{
            myTestProperty: 'test'
        }];
        createElementWithData(data);
        expect(compiled.text().indexOf('myTestProperty')).toBe(-1);
    });

    it('should create 2 columns if passed an object with 2 properties inside of an array', function () {
        var data = [{
            myTestProperty: 'test',
            myTestProperty2: 'bla'
        }];
        createElementWithData(data);
        var columns = compiled.find('td');
        expect(columns.length).toBe(2);
    });

    it('should present the values of 2 properties of a passed object inside of an array in 2 different columns', function () {
        var data = [{
            myTestProperty: 'test',
            myTestProperty2: 'bla'
        }];
        createElementWithData(data);
        expect(compiled.text().indexOf(data[0].myTestProperty)).toBeGreaterThan(-1);
        expect(compiled.text().indexOf(data[0].myTestProperty2)).toBeGreaterThan(-1);
        var columns = compiled.find('td');
        var column1 = angular.element(columns[0]);
        var column2 = angular.element(columns[1]);
        expect(column1.text().indexOf('test')).toBeGreaterThan(-1);
        expect(column1.text().indexOf('bla')).toBe(-1);
        expect(column2.text().indexOf('bla')).toBeGreaterThan(-1);
        expect(column2.text().indexOf('test')).toBe(-1);
    });

    it('should present same number of rows for an array of two objects', function () {
        var headerRows = 1;
        var arrayOfObjects = [];
        fillArrayWithData(2, arrayOfObjects);
        createElementWithData(arrayOfObjects);
        var rows = compiled.find('tr');
        expect(rows.length).toBe(arrayOfObjects.length + headerRows);
    });
    it('should present different objects in the same table', function () {
        var headerRows = 1;
        var data = [{
            meat: 'bacon',
            weight: '10 kg'
        }, {
            drink: 'beer',
            amount: '7'
        }];
        createElementWithData(data);
        var rows = compiled.find('tr');
        var columnElements = compiled.find('td');
        expect(rows.length).toBe(2 + headerRows);
        expect(columnElements.length).toBe(4);
    });

    it('should be able to render a thousand rows', function () {
        var headerRows = 1;
        var rowCount = 1000;
        var arrayOfObjects = [];
        var expectedLength = rowCount + headerRows;
        fillArrayWithData(rowCount, arrayOfObjects);
        createElementWithData(arrayOfObjects);
        var rows = compiled.find('tr');
        expect(rows.length).toBe(expectedLength);
    });

    it('should render only one chosen property of the two in an object', function () {
        var shouldRender = '10 kg';
        var shouldNotRender = 'bacon';
        var data = [{
            meat: 'bacon',
            weight: '10 kg'
        }];
        var meta = [{
            name: 'weight'
        }];
        createElementWithDataAndMetaData(data, meta);
        var columns = compiled.find('td');
        expect(columns.text().indexOf(shouldRender)).toBeGreaterThan(-1);
        expect(columns.text().indexOf(shouldNotRender)).toBe(-1);
        expect(columns.length).toBe(1);
    });

    it('should only render an empty td, if the specified properties are not amongg the properties in the object ', function () {
        var shouldRender = '';
        var shouldNotRender = 'bacon';
        var expectedLength = 1;
        var data = [{
            meat: 'bacon',
            weight: '10 kg'
        }];
        var meta = [{
            name: 'title'
        }];
        createElementWithDataAndMetaData(data, meta);

        var columns = compiled.find('td');
        expect(columns.text().indexOf(shouldRender)).toBeGreaterThan(-1);
        expect(columns.text().indexOf(shouldNotRender)).toBe(-1);
        expect(columns.length).toBe(expectedLength);
    });

    it('should render the properties in the order defined in the metadata ', function () {
        var shouldRenderFirst = '19 kg';
        var shouldRenderSecond = 'bacon';
        var data = [{
            meat: shouldRenderSecond,
            weight: shouldRenderFirst
        }];
        var meta = [{
            name: 'weight'
        }, {
            name: 'meat'
        }];
        createElementWithDataAndMetaData(data, meta);
        var columns = compiled.find('td');
        var column1 = angular.element(columns[0]);
        var column2 = angular.element(columns[1]);

        expect(column1.text().indexOf(shouldRenderFirst)).toBeGreaterThan(-1);
        expect(column2.text().indexOf(shouldRenderSecond)).toBeGreaterThan(-1);
    });

    describe('with renderer text ', function () {
        it('should render a property without modifying it, if no metadata is supplied', function () {
            var shouldRender = 'bacon';
            var data = [{
                meat: shouldRender
            }];
            createElementWithData(data);
            expect(compiled.text().indexOf(shouldRender)).toBeGreaterThan(-1);
        });
        it('should should render without modifying it, if metadata is supplied, but no type is given ', function () {
            var shouldRender = 'bacon';
            var data = [{
                meat: shouldRender
            }];
            var meta = [{
                name: 'meat'
            }];
            createElementWithDataAndMetaData(data, meta);
            expect(compiled.text().indexOf(shouldRender)).toBeGreaterThan(-1);
        });
        it('should render without modifying it, if metadata is supplied and type is "text" ', function () {
            var shouldRender = 'bacon';
            var data = [{
                meat: shouldRender
            }];
            var meta = [{
                name: 'meat',
                type: 'text'
            }];
            createElementWithDataAndMetaData(data, meta);
            expect(compiled.text().indexOf(shouldRender)).toBeGreaterThan(-1);
        });
    });
    describe('with renderer date ', function () {
        it('should render a property with metadata-type "date" in a default-format dd.MM.yyyy, if no format is given ', function () {
            var shouldRender = '22.12.2015';
            var data = [{
                importantDate: 1450793095
            }];
            var meta = [{
                name: 'importantDate',
                type: 'date'
            }];
            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render a property with type date in the format passed in a config-object ', function () {
            var shouldRender = '22.12.15';
            var data = [{
                importantDate: 1450793095
            }];
            var meta = [{
                name: 'importantDate',
                type: 'date'
            }];
            var config = {
                dateFormat: 'dd.MM.yy'
            };
            createElementWithDataAndMetaDataAndConfig(data, meta, config);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });

    });
    describe('with renderer filesize', function () {
        it('should render a property with metadata-type "filesize" and size 1024 as "1 KB"  ', function () {
            var shouldRender = '1 KB';
            var data = [{
                fileSize: 1024
            }];
            var meta = [{
                name: 'fileSize',
                type: 'filesize'
            }];
            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render a property with metadata-type "filesize" and size 1500 as "1 KB"  ', function () {
            var shouldRender = '1 KB';
            var data = [{
                fileSize: 1500
            }];
            var meta = [{
                name: 'fileSize',
                type: 'filesize'
            }];
            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render a property with metadata-type "filesize" and size 1900 as "2 KB"  ', function () {
            var shouldRender = '2 KB';
            var data = [{
                fileSize: 1900
            }];
            var meta = [{
                name: 'fileSize',
                type: 'filesize'
            }];
            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render a property with metadata-type "filesize" and size 100 as "100 B"  ', function () {
            var shouldRender = '100 B';
            var data = [{
                fileSize: 100
            }];
            var meta = [{
                name: 'fileSize',
                type: 'filesize'
            }];
            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render a property with metadata-type "filesize" and size 2000000 as "2 MB"  ', function () {
            var shouldRender = '2 MB';
            var data = [{
                fileSize: 2000000
            }];
            var meta = [{
                name: 'fileSize',
                type: 'filesize'
            }];
            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render a property with metadata-type "filesize" and size 1900000000 as "2 GB"  ', function () {
            var shouldRender = '2 GB';
            var data = [{
                fileSize: 1900000000
            }];
            var meta = [{
                name: 'fileSize',
                type: 'filesize'
            }];
            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render a property with metadata-type "filesize" and size 900000000 as "858 MB"  ', function () {
            var shouldRender = '858 MB';
            var data = [{
                fileSize: 900000000
            }];
            var meta = [{
                name: 'fileSize',
                type: 'filesize'
            }];
            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });

    });
    describe('with renderer list', function () {
        it('should render a property with type list and no configuration as the first property of the objects in the passed array ', function () {
            var shouldRender = 'Honk';
            var data = [{
                importantDate: 1450793095,
                users: [
                    {
                        name: 'Honk',
                        lastName: 'Bonk',
                        age: '15'
                    }
                ]
            }];
            var meta = [{
                name: 'users',
                type: 'list'
            }];

            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render the configured property ', function () {
            var shouldRender = 'Bonk';
            var data = [{
                importantDate: 1450793095,
                users: [
                    {
                        name: 'Honk',
                        lastName: 'Bonk',
                        age: '15'
                    }
                ]
            }];
            var meta = [{
                name: 'users',
                type: 'list',
                properties: ['lastName']
            }];

            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render two properties ', function () {
            var shouldRender = 'Bonk Honk';
            var data = [{
                importantDate: 1450793095,
                users: [
                    {
                        name: 'Honk',
                        lastName: 'Bonk',
                        age: '15'
                    }
                ]
            }];
            var meta = [{
                name: 'users',
                type: 'list',
                properties: ['lastName', 'name']
            }];

            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should render two items ', function () {
            var shouldRender = 'Bonk, Flop';
            var data = [{
                importantDate: 1450793095,
                users: [
                    {
                        name: 'Honk',
                        lastName: 'Bonk',
                        age: '15'
                    },
                    {
                        name: 'Bob',
                        lastName: 'Flop'
                    }
                ]
            }];
            var meta = [{
                name: 'users',
                type: 'list',
                properties: ['lastName']
            }];

            createElementWithDataAndMetaData(data, meta);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });

        it('should use an alternative wordSeparator ', function () {
            var shouldRender = 'Bonk!Honk';
            var data = [{
                importantDate: 1450793095,
                users: [
                    {
                        name: 'Honk',
                        lastName: 'Bonk',
                        age: '15'
                    }
                ]
            }];
            var meta = [{
                name: 'users',
                type: 'list',
                properties: ['lastName', 'name']
            }];
            var config = {
                wordSeparator: '!'
            };

            createElementWithDataAndMetaDataAndConfig(data, meta, config);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
        it('should only use an wordseparator, when property is defined in data ', function () {
            var shouldRender = 'Honk';
            var data = [{
                importantDate: 1450793095,
                users: [
                    {
                        name: 'Honk',
                        age: '15'
                    }
                ]
            }];
            var meta = [{
                name: 'users',
                type: 'list',
                properties: ['lastName', 'name']
            }];
            var config = {
                wordSeparator: '!'
            };

            createElementWithDataAndMetaDataAndConfig(data, meta, config);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });

        it('should use an alternative listSeparator ', function () {
            var shouldRender = 'Bonk!Flop';
            var data = [{
                importantDate: 1450793095,
                users: [
                    {
                        name: 'Honk',
                        lastName: 'Bonk',
                        age: '15'
                    },
                    {
                        name: 'Bob',
                        lastName: 'Flop'
                    }
                ]
            }];
            var meta = [{
                name: 'users',
                type: 'list',
                properties: ['lastName']
            }];
            var config = {
                listSeparator: '!'
            };

            createElementWithDataAndMetaDataAndConfig(data, meta, config);
            var columns = compiled.find('td');
            expect(columns.text().trim()).toBe(shouldRender);
        });
    });

    describe('with a config object ', function () {
        it('should show a message if no data is given', function () {
            createEmptyElement();
            expect(compiled.text().indexOf('no items')).toBeGreaterThan(-1);
        });

        it('should show passed warning if no data is passed to the table', function () {
            var warningMessageToPass = 'this table is empty!';
            createEmptyElementWithMessage(warningMessageToPass);
            expect(compiled.text().indexOf(warningMessageToPass)).toBeGreaterThan(-1);
        });
    });
    describe('with sorting ', function () {
        it('should have a table header ', function () {
            var data = [{
                myTestProperty: 'test'
            }];
            createElementWithData(data);
            expect(compiled.find('thead').length).toBeGreaterThan(0);
        });
        it('should have 3 headers if there are 3 object properties ', function () {
            var data = [{
                myTestProperty: 'test',
                myTestProperty2: 'test',
                myTestProperty3: 'test'
            }];
            createElementWithData(data);
            expect(compiled.find('th').length).toBe(3);
        });
        it('should have 3 headers if there are 3 columns in metadata ', function () {
            var data = [{
                myTestProperty: 'test',
                myTestProperty2: 'test',
                myTestProperty3: 'test',
                myTestProperty4: 'test',
                myTestProperty5: 'test'
            }];
            var meta = [
                {
                    name: 'myTestProperty'
                }, {
                    name: 'myTestProperty3'
                }, {
                    name: 'myTestProperty5'
                }
            ];
            createElementWithDataAndMetaData(data, meta);
            expect(compiled.find('th').length).toBe(3);
        });
        it('should have a header called "weight" if there is no header-title defined ', function () {
            var data = [{
                weight: 'test'
            }];
            var meta = [
                {
                    name: 'weight'
                }
            ];
            createElementWithDataAndMetaData(data, meta);
            var firstHeader = angular.element(compiled.find('th')[0]);
            expect(firstHeader.text().indexOf('weight')).toBeGreaterThan(-1);
        });
        it('should have a header called "Gewicht" if there is a header-title defined ', function () {
            var expectedTitle = 'Gewicht';
            var data = [{
                weight: 'test'
            }];
            var meta = [
                {
                    name: 'weight',
                    title: expectedTitle
                }
            ];
            createElementWithDataAndMetaData(data, meta);
            var firstHeader = angular.element(compiled.find('th')[0]);
            expect(firstHeader.text().indexOf(expectedTitle)).toBeGreaterThan(-1);
        });
        it('should sort a text-column alphabetically ', function () {
            var data = [
                {
                    weight: 'test'
                }, {
                    weight: 'zonk'
                }, {
                    weight: 'bla'
                }
            ];
            var meta = [
                {
                    name: 'weight'
                }
            ];
            createElementWithDataAndMetaData(data, meta);
            var firstRow = angular.element(compiled.find('td')[0]);
            var thirdRow = angular.element(compiled.find('td')[2]);
            expect(firstRow.text().trim()).toBe('test');
            expect(thirdRow.text().trim()).toBe('bla');

            compiled.find('a').eq(0).click();
            firstRow = angular.element(compiled.find('td')[0]);
            thirdRow = angular.element(compiled.find('td')[2]);
            expect(firstRow.text().trim()).toBe('bla');
            expect(thirdRow.text().trim()).toBe('zonk');

        });
        it('should sort a text-column ascending and descending ', function () {
            var data = [
                {
                    weight: 'test'
                }, {
                    weight: 'zonk'
                }, {
                    weight: 'bla'
                }
            ];
            var meta = [
                {
                    name: 'weight'
                }
            ];
            createElementWithDataAndMetaData(data, meta);

            compiled.find('a').eq(0).click();
            var firstRow = angular.element(compiled.find('td')[0]);
            var thirdRow = angular.element(compiled.find('td')[2]);
            expect(firstRow.text().trim()).toBe('bla');
            expect(thirdRow.text().trim()).toBe('zonk');

            compiled.find('a').eq(0).click();
            firstRow = angular.element(compiled.find('td')[0]);
            thirdRow = angular.element(compiled.find('td')[2]);
            expect(firstRow.text().trim()).toBe('zonk');
            expect(thirdRow.text().trim()).toBe('bla');
        });
        it('should sort a date in seconds ', function () {
            var data = [
                {
                    importantDate: 1448976685
                },
                {
                    importantDate: 1447162285
                },
                {
                    importantDate: 1448458285
                }
            ];
            var meta = [{
                name: 'importantDate',
                type: 'date'
            }];
            createElementWithDataAndMetaData(data, meta);
            compiled.find('a').eq(0).click();
            var firstRow = angular.element(compiled.find('td')[0]);
            var thirdRow = angular.element(compiled.find('td')[2]);
            expect(firstRow.text().trim()).toBe('10.11.2015');
            expect(thirdRow.text().trim()).toBe('01.12.2015');

            compiled.find('a').eq(0).click();
            firstRow = angular.element(compiled.find('td')[0]);
            thirdRow = angular.element(compiled.find('td')[2]);
            expect(firstRow.text().trim()).toBe('01.12.2015');
            expect(thirdRow.text().trim()).toBe('10.11.2015');

        });
        it('should sort a list ', function () {
            var data = [{
                users: [
                    {
                        name: 'Honk',
                        lastName: 'Bonk',
                        age: '15'
                    },
                    {
                        name: 'Bob',
                        lastName: 'Flop'
                    }
                ]
            },{
                users:[
                    {
                        lastName:'Anton'
                    },
                    {
                        lastName: 'Meyer'
                    }
                ]
            }

            ];
            var meta = [{
                name: 'users',
                type: 'list',
                properties: ['lastName']
            }];
            createElementWithDataAndMetaData(data, meta);

            compiled.find('a').eq(0).click();
            var firstRow = angular.element(compiled.find('td')[0]);
            var secondRow = angular.element(compiled.find('td')[1]);
            expect(firstRow.text().trim()).toBe('Anton, Meyer');
            expect(secondRow.text().trim()).toBe('Bonk, Flop');

            compiled.find('a').eq(0).click();
            firstRow = angular.element(compiled.find('td')[0]);
            secondRow = angular.element(compiled.find('td')[1]);
            expect(firstRow.text().trim()).toBe('Bonk, Flop');
            expect(secondRow.text().trim()).toBe('Anton, Meyer');

        });

        it('should add classes to TH if sorting ', function () {
            var data = [
                {
                    weight: 'test'
                }, {
                    weight: 'zonk'
                }, {
                    weight: 'bla'
                }
            ];
            var meta = [
                {
                    name: 'weight'
                }
            ];
            createElementWithDataAndMetaData(data, meta);
            var contents = compiled.find('th');
            contents.find('a').eq(0).click();
            expect(contents.eq(0).attr('class').indexOf('genericTable-sortAsc')).toBeGreaterThan(-1);
            contents.find('a').eq(0).click();
            expect(contents.eq(0).attr('class').indexOf('genericTable-sortDesc')).toBeGreaterThan(-1);
        });
    });

    function fillArrayWithData(expectedLength, arrayOfObjects) {
        for (var i = 0; i < expectedLength; i++) {
            arrayOfObjects.push({breakfast: 'eggs'});
        }
    }

    function createEmptyElement() {
        var element = '<generic-table></generic-table>';
        compileElement(element);
    }

    function createEmptyElementWithMessage(noDataWarning) {
        $rootScope.config = {
            noDataWarning: noDataWarning
        };
        var element = '<generic-table config="::config"></generic-table>';
        compileElement(element);
    }

    function compileElement(element) {
        compiled = $compile(element)($rootScope);
        $rootScope.$digest();
    }

    function createElementWithData(data) {
        $rootScope.data = data;
        var element = '<generic-table items="::data"></generic-table>';
        compileElement(element);
    }

    function createElementWithDataAndMetaData(data, meta) {
        $rootScope.data = data;
        $rootScope.meta = meta;
        var element = '<generic-table items="::data" meta="::meta"></generic-table>';
        compileElement(element);
    }

    function createElementWithDataAndMetaDataAndConfig(data, meta, config) {
        $rootScope.data = data;
        $rootScope.meta = meta;
        $rootScope.config = config;
        var element = '<generic-table items="::data" meta="::meta" config="::config"></generic-table>';
        compileElement(element);
    }

});
