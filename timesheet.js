//javascript:(function(){

//Mon
$('select[name="billingDetailItems[0].billingTimeSpans[0].startHourM"] option[value="8"]').attr('selected', 'selected'); //Mon start
$('select[name="billingDetailItems[0].billingTimeSpans[0].endHourM"] option[value="12"]').attr('selected', 'selected'); //Mon end
$('select[name="billingDetailItems[0].billingTimeSpans[0].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('0', '1', '0.0');
addNew(0,'timeEntry');

$('select[name="billingDetailItems[0].billingTimeSpans[1].startHourM"] option[value="12"]').attr('selected', 'selected'); //lunch start
$('select[name="billingDetailItems[0].billingTimeSpans[1].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[0].billingTimeSpans[1].endHourM"] option[value="1"]').attr('selected', 'selected'); //lunch end
$('select[name="billingDetailItems[0].billingTimeSpans[1].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[0].billingTimeSpans[1].timeEntrySpanType"] option[value="Lunch"]').attr('selected', 'selected'); //type
doTotalHoursForTimeSpans12('0', '2', '0.0');
addNew(0,'timeEntry');

$('select[name="billingDetailItems[0].billingTimeSpans[2].startHourM"] option[value="1"]').attr('selected', 'selected'); //after start
$('select[name="billingDetailItems[0].billingTimeSpans[2].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[0].billingTimeSpans[2].endHourM"] option[value="5"]').attr('selected', 'selected'); //after end
$('select[name="billingDetailItems[0].billingTimeSpans[2].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('0', '3', '0.0');


//Tues
$('select[name="billingDetailItems[1].billingTimeSpans[0].startHourM"] option[value="8"]').attr('selected', 'selected'); //Tues start
$('select[name="billingDetailItems[1].billingTimeSpans[0].endHourM"] option[value="12"]').attr('selected', 'selected'); //Tues end
$('select[name="billingDetailItems[1].billingTimeSpans[0].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('1', '1', '0.0');
addNew(1,'timeEntry');

$('select[name="billingDetailItems[1].billingTimeSpans[1].startHourM"] option[value="12"]').attr('selected', 'selected'); //lunch start
$('select[name="billingDetailItems[1].billingTimeSpans[1].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[1].billingTimeSpans[1].endHourM"] option[value="1"]').attr('selected', 'selected'); //lunch end
$('select[name="billingDetailItems[1].billingTimeSpans[1].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[1].billingTimeSpans[1].timeEntrySpanType"] option[value="Lunch"]').attr('selected', 'selected'); //type
doTotalHoursForTimeSpans12('1', '2', '0.0');
addNew(1,'timeEntry');

$('select[name="billingDetailItems[1].billingTimeSpans[2].startHourM"] option[value="1"]').attr('selected', 'selected'); //after start
$('select[name="billingDetailItems[1].billingTimeSpans[2].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[1].billingTimeSpans[2].endHourM"] option[value="5"]').attr('selected', 'selected'); //after end
$('select[name="billingDetailItems[1].billingTimeSpans[2].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('1', '3', '0.0');


//Wed
$('select[name="billingDetailItems[2].billingTimeSpans[0].startHourM"] option[value="8"]').attr('selected', 'selected'); //Tues start
$('select[name="billingDetailItems[2].billingTimeSpans[0].endHourM"] option[value="12"]').attr('selected', 'selected'); //Tues end
$('select[name="billingDetailItems[2].billingTimeSpans[0].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('2', '1', '0.0');
addNew(2,'timeEntry');

$('select[name="billingDetailItems[2].billingTimeSpans[1].startHourM"] option[value="12"]').attr('selected', 'selected'); //lunch start
$('select[name="billingDetailItems[2].billingTimeSpans[1].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[2].billingTimeSpans[1].endHourM"] option[value="1"]').attr('selected', 'selected'); //lunch end
$('select[name="billingDetailItems[2].billingTimeSpans[1].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[2].billingTimeSpans[1].timeEntrySpanType"] option[value="Lunch"]').attr('selected', 'selected'); //type
doTotalHoursForTimeSpans12('2', '2', '0.0');
addNew(2,'timeEntry');

$('select[name="billingDetailItems[2].billingTimeSpans[2].startHourM"] option[value="1"]').attr('selected', 'selected'); //after start
$('select[name="billingDetailItems[2].billingTimeSpans[2].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[2].billingTimeSpans[2].endHourM"] option[value="5"]').attr('selected', 'selected'); //after end
$('select[name="billingDetailItems[2].billingTimeSpans[2].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('2', '3', '0.0');


//Thrs
$('select[name="billingDetailItems[3].billingTimeSpans[0].startHourM"] option[value="8"]').attr('selected', 'selected'); //Tues start
$('select[name="billingDetailItems[3].billingTimeSpans[0].endHourM"] option[value="12"]').attr('selected', 'selected'); //Tues end
$('select[name="billingDetailItems[3].billingTimeSpans[0].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('3', '1', '0.0');
addNew(3,'timeEntry');

$('select[name="billingDetailItems[3].billingTimeSpans[1].startHourM"] option[value="12"]').attr('selected', 'selected'); //lunch start
$('select[name="billingDetailItems[3].billingTimeSpans[1].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[3].billingTimeSpans[1].endHourM"] option[value="1"]').attr('selected', 'selected'); //lunch end
$('select[name="billingDetailItems[3].billingTimeSpans[1].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[3].billingTimeSpans[1].timeEntrySpanType"] option[value="Lunch"]').attr('selected', 'selected'); //type
doTotalHoursForTimeSpans12('3', '2', '0.0');
addNew(3,'timeEntry');

$('select[name="billingDetailItems[3].billingTimeSpans[2].startHourM"] option[value="1"]').attr('selected', 'selected'); //after start
$('select[name="billingDetailItems[3].billingTimeSpans[2].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[3].billingTimeSpans[2].endHourM"] option[value="5"]').attr('selected', 'selected'); //after end
$('select[name="billingDetailItems[3].billingTimeSpans[2].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('3', '3', '0.0');


//Fri
$('select[name="billingDetailItems[4].billingTimeSpans[0].startHourM"] option[value="8"]').attr('selected', 'selected'); //Tues start
$('select[name="billingDetailItems[4].billingTimeSpans[0].endHourM"] option[value="12"]').attr('selected', 'selected'); //Tues end
$('select[name="billingDetailItems[4].billingTimeSpans[0].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('4', '1', '0.0');
addNew(4,'timeEntry');

$('select[name="billingDetailItems[4].billingTimeSpans[1].startHourM"] option[value="12"]').attr('selected', 'selected'); //lunch start
$('select[name="billingDetailItems[4].billingTimeSpans[1].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[4].billingTimeSpans[1].endHourM"] option[value="1"]').attr('selected', 'selected'); //lunch end
$('select[name="billingDetailItems[4].billingTimeSpans[1].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[4].billingTimeSpans[1].timeEntrySpanType"] option[value="Lunch"]').attr('selected', 'selected'); //type
doTotalHoursForTimeSpans12('4', '2', '0.0');
addNew(4,'timeEntry');

$('select[name="billingDetailItems[4].billingTimeSpans[2].startHourM"] option[value="1"]').attr('selected', 'selected'); //after start
$('select[name="billingDetailItems[4].billingTimeSpans[2].startMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
$('select[name="billingDetailItems[4].billingTimeSpans[2].endHourM"] option[value="5"]').attr('selected', 'selected'); //after end
$('select[name="billingDetailItems[4].billingTimeSpans[2].endMeridiem"] option[value="1"]').attr('selected', 'selected'); // PM
doTotalHoursForTimeSpans12('4', '3', '0.0');

//})();