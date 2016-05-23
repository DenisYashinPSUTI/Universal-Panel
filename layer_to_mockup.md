//==================== layer_to_mockup ==============
//
function layer_to_mockup() {
  // Set
  function step1(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var ref1 = new ActionReference();
    ref1.putProperty(PSClass.Channel, PSString.selection);
    desc1.putReference(PSString.Null, ref1);
    desc1.putEnumerated(PSKey.To, PSType.Ordinal, PSEnum.All);
    executeAction(PSEvent.Set, desc1, dialogMode);
  };

  // Copy
  function step2(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(PSEvent.Copy, undefined, dialogMode);
  };

  // Open
  function step3(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putPath(PSString.Null, new File("~/Desktop/123.psd"));
    executeAction(PSEvent.Open, desc1, dialogMode);
  };

  // Edit Contents
  function step4(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    executeAction(sTID('placedLayerEditContents'), desc1, dialogMode);
  };

  // Paste
  function step5(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    desc1.putEnumerated(PSKey.AntiAlias, PSType.AntiAlias, PSEnum.AntiAliasNone);
    executeAction(PSEvent.Paste, desc1, dialogMode);
  };

  // Close
  function step6(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    var desc1 = new ActionDescriptor();
    var desc2 = new ActionDescriptor();
    desc2.putBoolean(PSString.maximizeCompatibility, false);
    desc1.putObject(PSKey.As, PSString.largeDocumentFormat, desc2);
    desc1.putPath(PSKey.In, new File("~/AppData/Local/Temp"));
    desc1.putInteger(PSKey.DocumentID, 1468);
    desc1.putEnumerated(PSKey.Saving, PSType.YesNo, PSEnum.Yes);
    executeAction(PSEvent.Close, desc1, dialogMode);
  };

  // Update Smart Objects
  function step7(enabled, withDialog) {
    if (enabled != undefined && !enabled)
      return;
    var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
    executeAction(sTID('updatePlacedLayer'), undefined, dialogMode);
  };

  step1();      // Set
  step2();      // Copy
  step3(true, true);      // Open
  step4(true, true);      // Edit Contents
  step5();      // Paste
  step6();      // Close
  step7();      // Update Smart Objects
};



cTID = function(s) { return app.charIDToTypeID(s); };
sTID = function(s) { return app.stringIDToTypeID(s); };

//
// layer_to_mockup.loadSymbols
//   Loading up the symbol definitions like this makes it possible
//   to include several of these generated files in one master file
//   provided a prefix is specified other than the default. It also
//   skips the definitions if PSConstants has already been loaded.
//
layer_to_mockup.loadSymbols = function() {
  var dbgLevel = $.level;
  $.level = 0;
  try {
    PSConstants;
    return; // only if PSConstants is defined
  } catch (e) {
  } finally {
    $.level = dbgLevel;
  }
  var needDefs = true;
  $.level = 0;
  try {
    PSClass;
    needDefs = false;
  } catch (e) {
  } finally {
    $.level = dbgLevel;
  }
  if (needDefs) {
    PSClass = function() {};
    PSEnum = function() {};
    PSEvent = function() {};
    PSForm = function() {};
    PSKey = function() {};
    PSType = function() {};
    PSUnit = function() {};
    PSString = function() {};
  }

  // We may still end up duplicating some of the following definitions
  // but at least we don't redefine PSClass, etc... and wipe out others
  PSClass.Channel = cTID('Chnl');
  PSEnum.All = cTID('Al  ');
  PSEnum.AntiAliasNone = cTID('Anno');
  PSEnum.Yes = cTID('Ys  ');
  PSEvent.Close = cTID('Cls ');
  PSEvent.Copy = cTID('copy');
  PSEvent.Open = cTID('Opn ');
  PSEvent.Paste = cTID('past');
  PSEvent.Set = cTID('setd');
  PSKey.AntiAlias = cTID('AntA');
  PSKey.As = cTID('As  ');
  PSKey.DocumentID = cTID('DocI');
  PSKey.In = cTID('In  ');
  PSKey.Saving = cTID('Svng');
  PSKey.To = cTID('T   ');
  PSString.Null = sTID('null');
  PSString.largeDocumentFormat = sTID('largeDocumentFormat');
  PSString.maximizeCompatibility = sTID('maximizeCompatibility');
  PSString.selection = sTID('selection');
  PSType.AntiAlias = cTID('Annt');
  PSType.Ordinal = cTID('Ordn');
  PSType.YesNo = cTID('YsN ');
};

layer_to_mockup.loadSymbols(); // load up our symbols



//=========================================
//                    layer_to_mockup.main
//=========================================
//

layer_to_mockup.main = function () {
  layer_to_mockup();
};

layer_to_mockup.main();
