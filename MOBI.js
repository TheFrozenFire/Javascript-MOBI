MOBI = function(mobifile) {
	this.pdb = new PDB();
	this.binary = this.pdb.binary;
	if(mobifile) this.loadFile(mobifile);
}; with ({mobiproto: MOBI.prototype}) {
	mobiproto.loadFile = function(mobifile) {
		this.pdb.loadFile(mobifile);
		
		var firstRecord = this.pdb.records[0];
		if(!firstRecord)
			return;
		
		var header = new StringStream(firstRecord.data);
		
		this.parsePalmDOCHeader(header);
	}

	mobiproto.compression = undefined;
	mobiproto.textLength = undefined;
	mobiproto.recordCount = undefined;
	mobiproto.recordSize = undefined;
	mobiproto.currentPosition = undefined;
	mobiproto.encryption = undefined;
	
	mobiproto.parsePalmDOCHeader = function(header) {
		this.compression = this.binary.toWord(header.read(2));
		header.read(2); // unused
		this.textLength = this.binary.toDWord(header.read(4));
		this.recordCount = this.binary.toWord(header.read(2));
		this.recordSize = this.binary.toWord(header.read(2));
		this.currentPosition = this.binary.toDWord(header.read(4));
		this.encryption = this.binary.toWord(header.read(2));
	}
	
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
	mobiproto.huffmanTableLength = undefined;
	
	mobiproto.exthFlags = undefined;
	
	mobiproto.DRMOffset = undefined;
	mobiproto.DRMCount = undefined;
	mobiproto.DRMSize = undefined;
	mobiproto.DRMFlags = undefined;
	
	mobiproto.firstContentRecordNumber = undefined;
	mobiproto.lastContentRecordNumber = undefined;
	
	mobiproto.FCISRecordNumber = undefined;
	mobiproto.FLISRecordNumber = undefined;
	
}
