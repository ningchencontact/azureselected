/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "14efb3dab49e382bdaa157824689e869"
  },
  {
    "url": "assets/css/0.styles.8970f8ee.css",
    "revision": "3598d3815a9dc63cd89273845abe06da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d4376054.js",
    "revision": "30babad2797ca9e2b987c9bf1efd37d7"
  },
  {
    "url": "assets/js/11.3c480b26.js",
    "revision": "c290a93a05f464772ecfce4bd1b11579"
  },
  {
    "url": "assets/js/12.4d5b00a1.js",
    "revision": "6ab2f53a757607ac808c72b41509d52b"
  },
  {
    "url": "assets/js/13.16cff23e.js",
    "revision": "01a3f196a7dec7fc66b906af33509e90"
  },
  {
    "url": "assets/js/14.9f348720.js",
    "revision": "81da66cdb660ec121cf713b8bc113eaa"
  },
  {
    "url": "assets/js/15.43d4be4a.js",
    "revision": "45f52ca08349a4b42c17f65ba34c4a48"
  },
  {
    "url": "assets/js/16.ae99ec5f.js",
    "revision": "55a8feb8ab1910c11e72be1636ff2ddb"
  },
  {
    "url": "assets/js/17.46b98b5b.js",
    "revision": "cf269c4889b76b2931355794a915d055"
  },
  {
    "url": "assets/js/18.07b13469.js",
    "revision": "f7dd03b42af8d45b9376bb842d31c3ce"
  },
  {
    "url": "assets/js/19.c878029b.js",
    "revision": "336e1ebd15acf3309455329e88310fd4"
  },
  {
    "url": "assets/js/2.024090f7.js",
    "revision": "ed926cadc31732b620577d49a5699f36"
  },
  {
    "url": "assets/js/20.351cac07.js",
    "revision": "e278d34ef4cccaca8e578fb35cb70a4b"
  },
  {
    "url": "assets/js/21.0f2c9620.js",
    "revision": "67d0a010503dcc028697de28fd0482c3"
  },
  {
    "url": "assets/js/22.03488e84.js",
    "revision": "c371442838807a1b4cabc78a86af6f16"
  },
  {
    "url": "assets/js/23.fbb286fb.js",
    "revision": "1d0eacbadee1695512c42d53c62b0526"
  },
  {
    "url": "assets/js/24.cc4f6b22.js",
    "revision": "c9da46646b57999e568058b1105528ff"
  },
  {
    "url": "assets/js/25.bdbf2c3d.js",
    "revision": "eb53d95d563ac78eb7d579bad82aee06"
  },
  {
    "url": "assets/js/26.0df3bfa0.js",
    "revision": "3a6bbc1307f6f9a784cea4e6df68596e"
  },
  {
    "url": "assets/js/27.b07de48d.js",
    "revision": "aaf3ba150e68236fc2167ad994a4231f"
  },
  {
    "url": "assets/js/28.64752660.js",
    "revision": "c89b50c190d99447950393ec2de53884"
  },
  {
    "url": "assets/js/29.9efb0a1f.js",
    "revision": "a7d87911d8dac30f96e864ccb8402458"
  },
  {
    "url": "assets/js/3.c99638c5.js",
    "revision": "12e20176f3446bc033ced6d68e329889"
  },
  {
    "url": "assets/js/30.f83bd00d.js",
    "revision": "3a09411fe96153e32af9d236316b309f"
  },
  {
    "url": "assets/js/31.9fa29b4e.js",
    "revision": "81218d02b4cbd42992277b49cf64422b"
  },
  {
    "url": "assets/js/32.1a4afa56.js",
    "revision": "f3538c18f39a1a17031e5b0d1a5c9e29"
  },
  {
    "url": "assets/js/33.a69297bf.js",
    "revision": "ca997bccb4910ed8c0067d1b0432d466"
  },
  {
    "url": "assets/js/34.6f38e77e.js",
    "revision": "81e520cf6d738a8a8ef66c95641b9a90"
  },
  {
    "url": "assets/js/35.36e0befd.js",
    "revision": "02d152a6f4766325765ace844a2e0f5a"
  },
  {
    "url": "assets/js/36.328c9bb8.js",
    "revision": "cfa6704f9a4a9210925c0a289a052198"
  },
  {
    "url": "assets/js/37.00ad202f.js",
    "revision": "eb5e5b08c91d89e0a5e7fb11f9a176c2"
  },
  {
    "url": "assets/js/38.a64c6fe2.js",
    "revision": "05fcb960f01dbf220fecae41f8c38fb5"
  },
  {
    "url": "assets/js/39.2581a014.js",
    "revision": "b68b105918cd4b6875876e1323789bf8"
  },
  {
    "url": "assets/js/4.7306908c.js",
    "revision": "34a372bf6c32873528f72ed9d709f90b"
  },
  {
    "url": "assets/js/40.a5bf28d8.js",
    "revision": "6189817cfb2f2e7e3095623b739be7bf"
  },
  {
    "url": "assets/js/41.581c0a90.js",
    "revision": "43466afba0303b6ef2815d2340c7052a"
  },
  {
    "url": "assets/js/42.cfaf4f7c.js",
    "revision": "a8eeb5fa2fdd11d18b7c655410f2690e"
  },
  {
    "url": "assets/js/43.c90515f8.js",
    "revision": "41e459dd56662938a0f3bb841d41fefc"
  },
  {
    "url": "assets/js/44.4b931fa0.js",
    "revision": "1d812b8088461216ddb583bad5ead72b"
  },
  {
    "url": "assets/js/45.d3d72e2b.js",
    "revision": "653c17d77db9a5f680fd50871bb11048"
  },
  {
    "url": "assets/js/46.dde52b5e.js",
    "revision": "26882de5d392afa44af8f8c9580b0df4"
  },
  {
    "url": "assets/js/47.995bdee2.js",
    "revision": "53602020b24334f3467354a49bce2ee6"
  },
  {
    "url": "assets/js/48.140de8a6.js",
    "revision": "02a4fbada5168245e2bfdc32830e12ec"
  },
  {
    "url": "assets/js/49.3536b2f9.js",
    "revision": "be2d320e3959d70244c928d393e90bcf"
  },
  {
    "url": "assets/js/5.4abcb495.js",
    "revision": "46c54d19d48d297dae47f0813dc03112"
  },
  {
    "url": "assets/js/50.517bdd30.js",
    "revision": "c26e7bac9504f02c90d0b5a19bc1b0ca"
  },
  {
    "url": "assets/js/51.01dff938.js",
    "revision": "e12791e761bb887d6570c81d10e6ddaa"
  },
  {
    "url": "assets/js/52.8de3f659.js",
    "revision": "882db96148235b61173fd86d5b1368f7"
  },
  {
    "url": "assets/js/53.74eac48a.js",
    "revision": "04ce202cbec9c926c7e8990412881aea"
  },
  {
    "url": "assets/js/6.7487709c.js",
    "revision": "d15731a076028dd65f52ef4dbc770982"
  },
  {
    "url": "assets/js/7.ca16cd2e.js",
    "revision": "43b282a2e51efcb4280bc027c0717e3b"
  },
  {
    "url": "assets/js/8.98289253.js",
    "revision": "a0047c4c720c4ec9144e972dbe1baa0d"
  },
  {
    "url": "assets/js/9.e0754485.js",
    "revision": "52aa753cf3e9a6340685d70e5bf3e0f5"
  },
  {
    "url": "assets/js/app.fb3b2999.js",
    "revision": "9c668c4e7a52ed0b4fe01d817b8e977e"
  },
  {
    "url": "CODE_OF_CONDUCT.html",
    "revision": "79efde9991dea6c5cfad65dd3afe8598"
  },
  {
    "url": "content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "dd00107c664f307b504cf8d65e113246"
  },
  {
    "url": "content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "faf0b8ec480bd657ec6af8c1453c2098"
  },
  {
    "url": "content/cloud-advocate/2019-12/Manage-multiple-Azure-tenancies-with-Azure-Lighthouse.html",
    "revision": "80b82e17fb89a0243cfa2af0562546b8"
  },
  {
    "url": "content/cloud-advocate/2019-12/what-i-learned-about-azure-arc-and-other-services-at-microsoft-ignite-2019.html",
    "revision": "2e08202b96663af8ecbb82f2bfe70bb2"
  },
  {
    "url": "content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "a1ab15cdd5c5cc6511a02f05bab7959b"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "7943bfd1532ad67d6d7b21bf91e73b61"
  },
  {
    "url": "content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "0a8e4f53a41df0ccee49634dae61bf73"
  },
  {
    "url": "content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "c11f240795ec2f46b56687fdf09cdac7"
  },
  {
    "url": "content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "2430db0a4c49858e28e93238e360fe4a"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "930e9cc140ae102c91e2835a5a9845bb"
  },
  {
    "url": "content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "eff68aa34c7f305f3caa38a000532ff1"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "ce0b45f69b90b346bc4e7debc33c8458"
  },
  {
    "url": "content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "febbc738575ead3762012a2bb5dd41a1"
  },
  {
    "url": "content/cloud-advocate/2020-03/9-advanced-tips-for-production-machine-learning.html",
    "revision": "3005d6e9b2323526c9ca602f09249f1e"
  },
  {
    "url": "content/cloud-advocate/2020-03/a-modern-developer-s-workflow-for-twine.html",
    "revision": "8ec08580a46b88f5e8d1e89c7ed8cca2"
  },
  {
    "url": "content/cloud-advocate/2020-03/create-your-first-model-with-azure-custom-vision-and-python.html",
    "revision": "d11b79d2320172ac052d6f2d7f2679b7"
  },
  {
    "url": "content/cloud-advocate/2020-03/getting-started-with-azureml-notebook-vms.html",
    "revision": "e9a4c9b8b2b41a287530df4dcb5c33bd"
  },
  {
    "url": "content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "aede0a7f6ed93daa30eb9a868647cfb9"
  },
  {
    "url": "content/index.html",
    "revision": "38486c43c0a5925e0b14e67b9ead9a89"
  },
  {
    "url": "CONTRIBUTING.html",
    "revision": "00a06c3c0f01ffbd9f01a2bc439b6198"
  },
  {
    "url": "img/azure-bit.png",
    "revision": "162128b495a62b636fb9f217ecd71785"
  },
  {
    "url": "img/logo_azure.svg",
    "revision": "ee96dfb4ed5fa38ab074f7e6257f2250"
  },
  {
    "url": "index.html",
    "revision": "42fc693900807647c26aee011c64166f"
  },
  {
    "url": "LICENSE.html",
    "revision": "73988bb31ed41f0eba4335e00be9340d"
  },
  {
    "url": "tags.html",
    "revision": "949fbac6d4b74eaec6f40c4c3ec11f35"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/deploying-java-ee-apps-to-azure-part-1.html",
    "revision": "75139d4f7e8706d6ea78ace7defc8e11"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2019-12/getting-the-latest-array-item-with-inline-script-in-logic-app.html",
    "revision": "10440d018f3e8fc73fb3955d0b48fa1e"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/can-you-use-blazor-for-only-part-of-an-app.html",
    "revision": "e47100a9788f3e82bbc857094390c481"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-2.html",
    "revision": "dd9ff02183e3f294037967148ab794d7"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/deploying-java-ee-apps-to-azure-part-3.html",
    "revision": "4c857a41e14f9900df5e3e1755690c0a"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/how-to-learn-microsoft-azure-in-2020.html",
    "revision": "4ff2e41b832fe4c086a929d04d1244a1"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-01/managing-security-with-azure-lighthouse-and-azure-arc.html",
    "revision": "c357749ba3d39acd0eff966a1f8299b9"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-reduce-the-costs-of-your-azure-iaas-vms.html",
    "revision": "7be09050f94f8c31ee24424c5c9bd06c"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/how-to-use-github-actions-to-deploy-an-azure-virtual-machine.html",
    "revision": "f3f4b0d6a6231e8dda51b0f728384aea"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "c4650ab94b5a0019461506bdaa586e8b"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-02/the-secret-art-of-debugging.html",
    "revision": "3be14716bfb65b891007bf588d33ec93"
  },
  {
    "url": "zh-cn/content/cloud-advocate/2020-03/getting-started-with-azureml-notebook-vms.html",
    "revision": "967a68932eddb79da3e7d893a1234aba"
  },
  {
    "url": "zh-cn/content/cloud-advocate/how-to-sync-azure-blob-storage-with-azcopy.html",
    "revision": "8f5c51b2b4daedab197acedea3bdb08f"
  },
  {
    "url": "zh-cn/content/index.html",
    "revision": "b514ac120e46e400b14858133fdd4c2e"
  },
  {
    "url": "zh-cn/index.html",
    "revision": "de690c9be72ed473b4ca59751b57bbe5"
  },
  {
    "url": "zh-cn/tags.html",
    "revision": "6a78e3404f2067af2bba68f72239202d"
  },
  {
    "url": "zh-tw/content/cloud-advocate/2020-02/the-best-way-to-start-with-azure-machine-learning.html",
    "revision": "2c86d21d33e33899d4e5b3024e54ed10"
  },
  {
    "url": "zh-tw/content/index.html",
    "revision": "3840c095e550e908fc6a09cedbf43856"
  },
  {
    "url": "zh-tw/index.html",
    "revision": "a741f9bf483b1210045ee068c54d70e9"
  },
  {
    "url": "zh-tw/tags.html",
    "revision": "2c11965f51c7f554a90d44c4814c7c94"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
