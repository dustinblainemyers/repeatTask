(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var queryString = 'number=INC0000046';
  var testRecord = new GlideRecord('incident');
	testRecord.addEncodedQuery(queryString);
	testRecord.query();
	while(testRecord.next()){
  // Logic you want to execute for the GlideRecord records
		var description = testRecord.getValue('number');
	gs.info(description);
	gs.info('hello');
}
	
})(current, previous);