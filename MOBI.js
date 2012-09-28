MOBI = function(mobifile) {
	this.pdb = new PDB();
	this.binary = this.pdb.binary;
	if(mobifile) this.loadFile(mobifile);
}; with ({mobiproto: MOBI.prototype}) {
	mobiproto.compression = undefined;
	mobiproto.textlength = undefined;
	mobiproto.recordcount = undefined;
	mobiproto.recordsize = undefined;
	mobiproto.currentPosition = undefined;
	mobiproto.encryption = undefined;
	
	mobiproto.headerLength = undefined;
	mobiproto.mobiType = undefined;
	mobiproto.textEncoding = undefined;
	mobiproto.uniqueID = undefined;
	mobiproto.fileVersion = undefined;
	
	mobiproto.orthographicIndex = undefined;
	mobiproto.inflectionIndex = undefined;
	mobiproto.indexNames = undefined;
	mobiproto.indexKeys = undefined;
	
	mobiproto.index0 = undefined;
	mobiproto.index1 = undefined;
	mobiproto.index2 = undefined;
	mobiproto.index3 = undefined;
	mobiproto.index4 = undefined;
	mobiproto.index5 = undefined;
	
	mobiproto.firstNonBook = undefined;
	
	mobiproto.fullNameOffset = undefined;
	mobiproto.fullNameLength = undefined;
	
	mobiproto.locale = undefined;
	mobiproto.inputLanguage = undefined;
	mobiproto.outputLanguage = undefined;
	
	mobiproto.minVersion = undefined;
	
	mobiproto.firstImageIndex = undefined;
	
	mobiproto.huffmanRecordOffset = undefined;
	mobiproto.huffmanRecordCount = undefined;
	mobiproto.huffmanTableOffset = undefined;

	mobiproto.loadFile = function(mobifile) {
		this.pdb.loadFile(mobifile);
		
		var firstRecord = this.pdb.records[0];
		if(!firstRecord)
			return;
		
		var header = new StringStream(firstRecord.data);
		
		this.parsePalmDOCHeader(header);
	}
	
	mobiproto.parsePalmDOCHeader = function(header) {
		
	}
}
