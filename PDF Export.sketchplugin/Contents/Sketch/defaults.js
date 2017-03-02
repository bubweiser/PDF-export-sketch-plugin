
var defaultsKeyPrefix = "com.davidwilliames.pdf-export."

var keys = {
  exportToImages: defaultsKeyPrefix + "exportToImages",
  excludeWithPrefix: defaultsKeyPrefix + "excludeWithPrefix",
  exclusionPrefix: defaultsKeyPrefix + "exclusionPrefix",
  imageExportScale: defaultsKeyPrefix + "imageExportScale",
  includeSymbolArtboards: defaultsKeyPrefix + "includeSymbolArtboards"
}

var defaults = {
  [keys.exportToImages]: false,
  [keys.excludeWithPrefix]: true,
  [keys.exclusionPrefix]: '-',
  [keys.imageExportScale]: 2,
  [keys.includeSymbolArtboards]: false
}
