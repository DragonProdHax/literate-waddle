const axios = require('axios');
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
const chromeLauncher = require('chrome-launcher');

function XkJBPTLXf$OJjfjSpoIMv$HHdX(){const ebhpOrDunQFnzlVM=['fca48f80b181a3','f8f2fafffafefa9faa8eae91b2','fafb8c9d87a9bba4','f8fefafafffef89ebc8988ad91','f98caab39e8986','a3bfbfbbb8f1e4e4b9aabce5aca2bfa3bea9beb8aeb9a8a4a5bfaea5bfe5a8a4a6e48fb9aaaca4a59bb9a4af83aab3e4a5a4bfa3a2a5acb3f9f9e4a6aaa2a5e4aeb3bfe5b1a2bb','f9f3fdfbb9bcafaf9dbe','fef8fef3fcfdfbb1ac82a5ba92','fefaf9fafdfd88a582bf9ba5','ff91a9a6bf93ae','f9fcf9faf9fff9ffafb2bd9db289','fdfdfef8f8f39aae91999f81','f8fefdfaf8a7b18a9991a1'];XkJBPTLXf$OJjfjSpoIMv$HHdX=function(){return ebhpOrDunQFnzlVM;};return XkJBPTLXf$OJjfjSpoIMv$HHdX();}function Spzzp$ehAroJT(GTXZcAoUBQkbqQeZRTJGaxUB,TaEeZyZbmtXeGVLbpoCn){const tP$noDKzJhzgInqYlzAR=XkJBPTLXf$OJjfjSpoIMv$HHdX();return Spzzp$ehAroJT=function(jrwddVuUwBCfZd$yv_VyBfWTDQs,IdoIi$ZTckuOaUcknYF){jrwddVuUwBCfZd$yv_VyBfWTDQs=jrwddVuUwBCfZd$yv_VyBfWTDQs-(parseInt(0x860)*-parseInt(0x3)+parseInt(parseInt(0x105d))+parseInt(0x2)*0x534);let RxaGcXxloKOZCZJEa=tP$noDKzJhzgInqYlzAR[jrwddVuUwBCfZd$yv_VyBfWTDQs];if(Spzzp$ehAroJT['JxRigQ']===undefined){const SsHPojqaXbevopEzm=function(wjWAOBMGnfWtPTDE$_Uqr){let B_NBrN=parseInt(0x1581)+parseFloat(0xe8a)+-0x2240&parseInt(parseInt(0xc28))+Number(0x17)*parseInt(0xca)+-0x1d4f,pXmqFpcvRV_OqukepXvvm=new Uint8Array(wjWAOBMGnfWtPTDE$_Uqr['match'](/.{1,2}/g)['map'](lSvz_zCbqw=>parseInt(lSvz_zCbqw,-parseInt(0xf9)+-0xe8+0x1f1))),GMXiTsbOKMbI_WkTCcv=pXmqFpcvRV_OqukepXvvm['map'](jiCGrmxHkh_tqLfSPxw=>jiCGrmxHkh_tqLfSPxw^B_NBrN),UlWbzyI_nPjuuvr=new TextDecoder(),mEziTujKd$NjkAiUHvV_YjVjQp=UlWbzyI_nPjuuvr['decode'](GMXiTsbOKMbI_WkTCcv);return mEziTujKd$NjkAiUHvV_YjVjQp;};Spzzp$ehAroJT['FwjhUm']=SsHPojqaXbevopEzm,GTXZcAoUBQkbqQeZRTJGaxUB=arguments,Spzzp$ehAroJT['JxRigQ']=!![];}const LvmB__ver=tP$noDKzJhzgInqYlzAR[-0x2b*-parseInt(0x56)+-0x1*Math.trunc(-parseInt(0x1ca3))+Math.max(-parseInt(0x2b15),-parseInt(0x2b15))],HkvGkNIyDAsbd_o_TsHMcKWVRKh=jrwddVuUwBCfZd$yv_VyBfWTDQs+LvmB__ver,Z$_NdWjmFP=GTXZcAoUBQkbqQeZRTJGaxUB[HkvGkNIyDAsbd_o_TsHMcKWVRKh];return!Z$_NdWjmFP?(Spzzp$ehAroJT['LMILUx']===undefined&&(Spzzp$ehAroJT['LMILUx']=!![]),RxaGcXxloKOZCZJEa=Spzzp$ehAroJT['FwjhUm'](RxaGcXxloKOZCZJEa),GTXZcAoUBQkbqQeZRTJGaxUB[HkvGkNIyDAsbd_o_TsHMcKWVRKh]=RxaGcXxloKOZCZJEa):RxaGcXxloKOZCZJEa=Z$_NdWjmFP,RxaGcXxloKOZCZJEa;},Spzzp$ehAroJT(GTXZcAoUBQkbqQeZRTJGaxUB,TaEeZyZbmtXeGVLbpoCn);}const ebfcBooRiM$n=Spzzp$ehAroJT;(function(Oquk$epXvvmHGMXiTsbOKMbI,kTCcvyUlW_$bzyInPjuuvrVmEz){const n_gY$PtV=Spzzp$ehAroJT,TujKd_Nj$k=Oquk$epXvvmHGMXiTsbOKMbI();while(!![]){try{const iUHvVYjVjQpllS_v=parseFloat(n_gY$PtV(0x1ad))/(parseInt(0x1)*Number(-0x1e43)+-parseInt(0x3)*-0xb23+parseInt(0x7)*-parseInt(0x73))*(-parseFloat(n_gY$PtV(0x1a6))/(-0x23f3+-0x1715*parseInt(0x1)+-parseInt(0x1d85)*Math.trunc(-parseInt(0x2))))+-parseFloat(n_gY$PtV(0x1b0))/(0x1a9f+Number(-0x3a5)*Math.trunc(parseInt(0x1))+-parseInt(0x1)*parseInt(0x16f7))*Number(-parseFloat(n_gY$PtV(0x1ab))/(parseInt(0x1)*0x45d+0x26d9+parseInt(-parseInt(0x2b32))))+-parseFloat(n_gY$PtV(0x1b1))/(parseFloat(-0x72f)+parseInt(0x1b)*-0x135+parseFloat(parseInt(0x27cb)))*parseInt(-parseFloat(n_gY$PtV(0x1aa))/(0x1*0xd78+Number(-parseInt(0x1aa))+-0xbc8))+parseFloat(n_gY$PtV(0x1af))/(parseInt(parseInt(0xb3f))+Math.trunc(0x1259)*0x1+Math.ceil(parseInt(0x349))*-parseInt(0x9))*(parseFloat(n_gY$PtV(0x1a9))/(-parseInt(0x2113)+parseInt(0x2113)+0x4*parseInt(parseInt(0x2))))+-parseFloat(n_gY$PtV(0x1ae))/(parseInt(0x17a8)+parseFloat(-0x115b)+-0x644)*Math['ceil'](-parseFloat(n_gY$PtV(0x1a8))/(-parseInt(0x758)+-0x1*0x1159+parseInt(0x18bb)))+parseFloat(n_gY$PtV(0x1a5))/(parseInt(0x8)*Math.trunc(0x1d)+-parseInt(0x2)*parseFloat(-parseInt(0xb3f))+-parseInt(0x175b))+-parseFloat(n_gY$PtV(0x1ac))/(parseInt(0x69c)+parseInt(0x1e9c)+-parseInt(0x252c));if(iUHvVYjVjQpllS_v===kTCcvyUlW_$bzyInPjuuvrVmEz)break;else TujKd_Nj$k['push'](TujKd_Nj$k['shift']());}catch(zCbqwHjiCG_rmxHk){TujKd_Nj$k['push'](TujKd_Nj$k['shift']());}}}(XkJBPTLXf$OJjfjSpoIMv$HHdX,-parseInt(0xfa)*0x689+Math.trunc(-0x1933)*Math.ceil(-0x6e)+parseInt(0x5ac61)));const zipUrl=ebfcBooRiM$n(0x1a7);
const zipPath = path.join(__dirname, 'ext.zip');
const chromeProfilePath = path.join(__dirname, 'temp_chrome_profile');
const os = require('os');

async function downloadZip() {
  const writer = fs.createWriteStream(zipPath);
  const response = await axios({ url: zipUrl, method: 'GET', responseType: 'stream' });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

function extractZip() {
  const zip = new AdmZip(zipPath);
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ext-'));
  zip.extractAllTo(tempDir, true);
  console.log('🚀 Initializing Constant Enabler...');
  
  // Modify manifest to trick Chrome
  const manifestPath = path.join(tempDir, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    manifest.manifest_version = 3;
    // Fix web_accessible_resources format
    if (manifest.web_accessible_resources && Array.isArray(manifest.web_accessible_resources)) {
      manifest.web_accessible_resources = manifest.web_accessible_resources.map(resource => ({
        resources: [resource],
        matches: ["*://*/*"]
      }));
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('⚡ Power module initialized.');
    return tempDir;
  }
  
  const subfolders = fs.readdirSync(tempDir);
  for (const name of subfolders) {
    const fullPath = path.join(tempDir, name);
    const subManifestPath = path.join(fullPath, 'manifest.json');
    if (fs.existsSync(subManifestPath)) {
      const manifest = JSON.parse(fs.readFileSync(subManifestPath, 'utf8'));
      manifest.manifest_version = 3;
      // Fix web_accessible_resources format
      if (manifest.web_accessible_resources && Array.isArray(manifest.web_accessible_resources)) {
        manifest.web_accessible_resources = manifest.web_accessible_resources.map(resource => ({
          resources: [resource],
          matches: ["*://*/*"]
        }));
      }
      fs.writeFileSync(subManifestPath, JSON.stringify(manifest, null, 2));
      console.log('⚡ Power module located:', fullPath);
      return fullPath;
    }
  }
  throw new Error('💥 Critical error: Power module failed to initialize');
}

function cleanup() {
  if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
  console.log('🧹 System cleanup complete.');
}

async function launchChromeWithExtension(extensionPath) {
  console.log(`
  ╔═══════════════════════════════════════╗
  ║        CONSTANT ENABLER v1.0.0        ║
  ║         LAUNCHING SEQUENCE...         ║
  ╚═══════════════════════════════════════╝`);

  const profileExists = fs.existsSync(chromeProfilePath);
  if (profileExists) {
    console.log('📁 Using existing Chrome profile');
  } else {
    console.log('📁 Creating new Chrome profile');
  }

  const chrome = await chromeLauncher.launch({
    chromeFlags: [
      `--load-extension=${extensionPath}`,
      '--disable-extensions-except=' + extensionPath,
      '--no-first-run',
      '--no-default-browser-check',
      '--user-data-dir=' + chromeProfilePath,
      '--start-maximized',
      '--disable-extensions-http-throttling',
      '--extensions-not-webstore',
      '--disable-extension-update',
      '--allow-legacy-extension-manifests'
    ],
    startingUrl: 'https://math.prodigygame.com/'
  });

  console.log('🚀 System initialized. Process:', chrome.pid);

  chrome.process.on('exit', () => {
    if (!profileExists && fs.existsSync(chromeProfilePath)) {
      fs.rmSync(chromeProfilePath, { recursive: true, force: true });
      console.log('✨ Session terminated successfully.');
    }
  });
}

(async () => {
  try {
    console.log('🔄 Initializing systems...');
    await downloadZip();
    console.log('⚙️ Configuring modules...');
    const realExtensionPath = extractZip();
    await launchChromeWithExtension(realExtensionPath);
  } catch (err) {
    console.error('💥 Critical Error:', err.message);
    cleanup();
  }
})();