"use strict";
var proxy = require('express-http-proxy');
var config_1 = require('../config');
module.exports = proxy(config_1.couchUrl, {
    decorateRequest: function (req) {
        return req;
    },
    intercept: function (rsp, data, req, res, callback) {
        data = data.toString('utf8');
        console.log(data);
        callback(null, data);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdWNoLXByb3h5LWVuZHBvaW50cy9nZXQtLXF1ZXN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBWSxLQUFLLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUM1Qyx1QkFBeUIsV0FBVyxDQUFDLENBQUE7QUFFckMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsaUJBQVEsRUFBRTtJQUVoQyxlQUFlLFlBQUMsR0FBRztRQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUdELFNBQVMsWUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUTtRQUV0QyxJQUFJLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztDQUNELENBQUMsQ0FBQyIsImZpbGUiOiJjb3VjaC1wcm94eS1lbmRwb2ludHMvZ2V0LS1xdWVzdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwcm94eSBmcm9tICdleHByZXNzLWh0dHAtcHJveHknO1xuaW1wb3J0IHsgY291Y2hVcmwgfSBmcm9tICcuLi9jb25maWcnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3h5KGNvdWNoVXJsLCB7XG5cdC8vIEludGVyY2VwdCByZXF1ZXN0c1xuXHRkZWNvcmF0ZVJlcXVlc3QocmVxKSB7XG5cdFx0cmV0dXJuIHJlcTtcblx0fSxcblx0Ly9maWx0ZXIgaGVyZSwgZWl0aGVyIHRydWUgb3IgZmFsc2Vcblx0Ly8gSW50ZXJjZXB0IHJlc3BvbnNlc1xuXHRpbnRlcmNlcHQocnNwLCBkYXRhLCByZXEsIHJlcywgY2FsbGJhY2spIHtcblx0Ly9cdGRhdGEgPSBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoJ3V0ZjgnKSk7XG5cdFx0ZGF0YT1kYXRhLnRvU3RyaW5nKCd1dGY4Jyk7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHRcdFxuXHRcdGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuXHR9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==