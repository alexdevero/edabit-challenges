class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan {
	static canStream = true
	static canDownload = true
	static numOfDevices = 2
	static hasSD = true
	static hasHD = true
	static hasUHD = false
	static price = '$12.99'
}

class PremiumPlan {
	static canStream = true
	static canDownload = true
	static numOfDevices = 4
	static hasSD = true
	static hasHD = true
	static hasUHD = true
	static price = '$15.99'
}

BasicPlan.canStream // true
BasicPlan.canDownload // true
BasicPlan.numOfDevices // 1
BasicPlan.hasSD // true
BasicPlan.hasHD // false
BasicPlan.hasUHD // false
BasicPlan.price // '$8.99'
StandardPlan.canStream // true 'Remember to add the StandardPlan class!'
StandardPlan.canDownload // true
StandardPlan.numOfDevices // 2
StandardPlan.hasSD // true
StandardPlan.hasHD // true
StandardPlan.hasUHD // false
StandardPlan.price // '$12.99'
PremiumPlan.canStream // true 'Remember to add the PremiumPlan class!'
PremiumPlan.canDownload // true
PremiumPlan.numOfDevices // 4
PremiumPlan.hasSD // true
PremiumPlan.hasHD // true
PremiumPlan.hasUHD // true
PremiumPlan.price // '$15.99'
