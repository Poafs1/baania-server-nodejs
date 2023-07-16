\c "baania-dev"

-- Clean all data in tables
TRUNCATE TABLE "home" CASCADE;

-- Reset auto increment
ALTER SEQUENCE "home_id_seq" RESTART WITH 1;

-- Insert Home data
insert into home ("name", "desc", price, post_code) values ('Buena Vista', 'PO Box 78432', 6725818, '73795');
insert into home ("name", "desc", price, post_code) values ('Daystar', 'Apt 1440', 9012596, '10110');
insert into home ("name", "desc", price, post_code) values ('Amoth', 'Room 1925', 1847238, '22840');
insert into home ("name", "desc", price, post_code) values ('Nobel', 'Room 629', 11723450, '10110');
insert into home ("name", "desc", price, post_code) values ('Loomis', 'Apt 187', 10344269, '10110');
insert into home ("name", "desc", price, post_code) values ('Nobel', 'Room 720', 4850010, '10110');
insert into home ("name", "desc", price, post_code) values ('Goodland', '16th Floor', 6714126, '10110');
insert into home ("name", "desc", price, post_code) values ('Kenwood', 'PO Box 31057', 9981789, '10110');
insert into home ("name", "desc", price, post_code) values ('8th', 'PO Box 32867', 2790014, '10110');
insert into home ("name", "desc", price, post_code) values ('Doe Crossing', 'PO Box 56163', 8364156, '10110');
insert into home ("name", "desc", price, post_code) values ('Hoepker', '9th Floor', 3474781, '3315');
insert into home ("name", "desc", price, post_code) values ('Hintze', 'Suite 46', 8498704, '4950-850');
insert into home ("name", "desc", price, post_code) values ('Stang', 'Room 1960', 8697549, '10110');
insert into home ("name", "desc", price, post_code) values ('South', 'Room 1405', 3954181, '10110');
insert into home ("name", "desc", price, post_code) values ('Farmco', 'PO Box 70503', 2713986, '4405');
insert into home ("name", "desc", price, post_code) values ('Cardinal', 'Room 776', 2221648, '10110');
insert into home ("name", "desc", price, post_code) values ('Rigney', 'Room 1146', 9706967, '704057');
insert into home ("name", "desc", price, post_code) values ('Superior', 'Room 442', 3233772, '10110');
insert into home ("name", "desc", price, post_code) values ('Dwight', 'Suite 42', 8025738, '10110');
insert into home ("name", "desc", price, post_code) values ('Mayfield', 'Apt 321', 6518694, '9200-078');
insert into home ("name", "desc", price, post_code) values ('Parkside', '7th Floor', 7765149, 'G5R');
insert into home ("name", "desc", price, post_code) values ('Rusk', '5th Floor', 6975699, '13807 CEDEX');
insert into home ("name", "desc", price, post_code) values ('Steensland', 'PO Box 3885', 8386324, '90035');
insert into home ("name", "desc", price, post_code) values ('Melvin', 'Room 1127', 1259237, '10110');
insert into home ("name", "desc", price, post_code) values ('Thompson', 'Room 755', 5151953, '10110');
insert into home ("name", "desc", price, post_code) values ('Green Ridge', '2nd Floor', 6135979, '10110');
insert into home ("name", "desc", price, post_code) values ('Ryan', 'Apt 1921', 1434496, '606912');
insert into home ("name", "desc", price, post_code) values ('Longview', 'Room 917', 1276391, '659029');
insert into home ("name", "desc", price, post_code) values ('Coolidge', 'Suite 34', 9109725, '40894');
insert into home ("name", "desc", price, post_code) values ('Westridge', 'Apt 958', 10556407, '74-210');
insert into home ("name", "desc", price, post_code) values ('Shoshone', 'Apt 1041', 4845397, '47211 CEDEX');
insert into home ("name", "desc", price, post_code) values ('Macpherson', 'PO Box 10901', 4813290, '7780-460');
insert into home ("name", "desc", price, post_code) values ('Lakeland', 'Suite 100', 4275617, '613384');
insert into home ("name", "desc", price, post_code) values ('Eagle Crest', 'Room 1793', 9831726, '10110');
insert into home ("name", "desc", price, post_code) values ('Bartelt', 'Suite 75', 11985797, '10110');
insert into home ("name", "desc", price, post_code) values ('Shelley', 'Apt 1178', 6670778, '10110');
insert into home ("name", "desc", price, post_code) values ('Village Green', 'Room 1402', 9541863, '81140');
insert into home ("name", "desc", price, post_code) values ('Warbler', 'Apt 1751', 7836745, '10110');
insert into home ("name", "desc", price, post_code) values ('American Ash', 'PO Box 98941', 7917601, '92056 CEDEX');
insert into home ("name", "desc", price, post_code) values ('Cherokee', '12th Floor', 11298016, '10110');
insert into home ("name", "desc", price, post_code) values ('Bluejay', 'Apt 1263', 6972214, '10110');
insert into home ("name", "desc", price, post_code) values ('Mockingbird', '6th Floor', 7234101, '9073');
insert into home ("name", "desc", price, post_code) values ('Briar Crest', 'PO Box 48846', 9463163, '107 07');
insert into home ("name", "desc", price, post_code) values ('Hanover', '2nd Floor', 4151357, '137 57');
insert into home ("name", "desc", price, post_code) values ('Elka', 'Apt 777', 5269483, '10110');
insert into home ("name", "desc", price, post_code) values ('Canary', 'Apt 113', 2794675, '10110');
insert into home ("name", "desc", price, post_code) values ('Vernon', 'PO Box 35772', 5037445, '10110');
insert into home ("name", "desc", price, post_code) values ('Jana', 'Suite 5', 9708354, '10110');
insert into home ("name", "desc", price, post_code) values ('Forest Run', 'Room 342', 2014137, '10110');
insert into home ("name", "desc", price, post_code) values ('Lunder', 'Suite 80', 4068219, '443049');
