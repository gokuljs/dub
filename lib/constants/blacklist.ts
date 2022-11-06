/*
 ************************************************
 * Crowdsourced list of blacklisted domains
 ************************************************
 * How to contribute:
 * 1. Find a domain that you think should be blacklisted (contain phishing links, spam links, pornographic content, etc.)
 * 2. Do a "CMD/CTRL + F" search for the domain in this file
 * 3. If the domain is not found, make a pull request with the domain added to the blacklist
 */

const BLACKLIST = new Set([
  "lopescarvalho.adv.br",
  "piracynchill.in",
  "tgnewstv.it",
  "secure.oldschool.com-os.cz",
  "rfiptv.xyz",
  "uiptv.ml",
  "8wogq.app.link",
  "w3hir.app.link",
  "jessie.5jnwb9k6op.monster",
  "christy.yhujykujujk.xyz",
  "jleog.app.link",
  "gc891.app.link",
  "alena.ytuiljhnvbh.xyz",
  "sehyf.app.link",
  "3cn8j.app.link",
  "heather.tryhfchgc.xyz",
  "allie.1e35tmecro.monster",
  "karen.nbmfdhcb.xyz",
  "ryan.tryhfchgc.xyz",
  "hndou.app.link",
  "61fcu.app.link",
  "nkz64.app.link",
  "chelsie.adfvsergtbaf.xyz",
  "8vuqh.app.link",
  "jodie.vbnmfhfdc.xyz",
  "jh534.app.link",
  "922555d.dwerls.eu.org",
  "6521d.app.link",
  "fad0fb.gartenleben.eu.org",
  "bcxui.app.link",
  "kiera.vbnmfhfdc.xyz",
  "uvne4.app.link",
  "4lwkf.app.link",
  "ccw50.app.link",
  "1d6b8ac2d1.huyts.eu.org",
  "hannah.muyjykjhrfd.xyz",
  "f5hgd.app.link",
  "cf7ee9bd.dwerls.eu.org",
  "c3494cbf0.sewdo.eu.org",
  "9056af2adf.sewdo.eu.org",
  "donna.yrcbdfhhfd.xyz",
  "88nab.app.link",
  "80ac6ecc2.huyts.eu.org",
  "305b8fa.kipoks.eu.org",
  "6be3fa26.huyts.eu.org",
  "befc44e645.huyts.eu.org",
  "lindsey.yhujykujujk.xyz",
  "kristie.ryutghfdhhdf.xyz",
  "esmeralda.vcnfhcb.xyz",
  "1bgq4.app.link",
  "12b7a7.kipoks.eu.org",
  "kassie.rtymjkuyxdg.xyz",
  "tierra.1e35tmecro.monster",
  "ux56b.app.link",
  "0tkmd.app.link",
  "bmzau.app.link",
  "b0daea.sewdo.eu.org",
  "nia.rdhychbxc.xyz",
  "kristina.fthfcn.xyz",
  "jdeih.app.link",
  "cgjj7.app.link",
  "daniela.yrcbdfhhfd.xyz",
  "anjelica.nbmfdhcb.xyz",
  "38b31c40.sunid.eu.org",
  "e98d65a3.huyts.eu.org",
  "fe9139f.huyts.eu.org",
  "dfd43a244a.gartenleben.eu.org",
  "6683ee5849.kipoks.eu.org",
  "813dce2726.sunid.eu.org",
  "5240c2608e.sunid.eu.org",
  "kiersten.rtymjkuyxdg.xyz",
  "katheryn.yrcbdfhhfd.xyz",
  "lizbeth.yrcbdfhhfd.xyz",
  "norma.ryutghfdhhdf.xyz",
  "clarissa.yuikjufgdsdh.xyz",
  "sidney.bvnfdhcbcb.xyz",
  "4e04cc6a9.huyts.eu.org",
  "06e257b3e.sewdo.eu.org",
  "ff4ed7a326.dwerls.eu.org",
  "kyra.bnfdhcvb.xyz",
  "angie.7trp0c5oep.monster",
  "chelsea.afedafdadc.xyz",
  "rachel.7trp0c5oep.monster",
  "meaghan.fzuzj04e6n.monster",
  "patricia.rtymjkuyxdg.xyz",
  "alexandra.bvnfdhcbcb.xyz",
  "micaela.vjnvvcmcxbxxd.xyz",
  "stacie.ytuiljhnvbh.xyz",
  "priscilla.5jnwb9k6op.monster",
  "cindy.ryutghfdhhdf.xyz",
  "aja.rdyfcdgcb.xyz",
  "dianna.muyjykjhrfd.xyz",
  "scarlett.rdhychbxc.xyz",
  "amelia.rdhychbxc.xyz",
  "fiona.ryutghfdhhdf.xyz",
  "sasha.adcfazdfc.xyz",
  "charity.yrcbdfhhfd.xyz",
  "ffthy.app.link",
  "a588eb0.huyts.eu.org",
  "6dbbfab8c.huyts.eu.org",
  "alison.bvnfdhcbcb.xyz",
  "chelsey.tyyithkgj.xyz",
  "tammy.bnfdhcvb.xyz",
  "genevieve.klkyfedrwere.xyz",
  "leeann.trugvfhjfg.xyz",
  "alexandrea.bvnfdhcbcb.xyz",
  "caitlin.retryfhdfg.xyz",
  "gillian.yhujykujujk.xyz",
  "marlena.adcfazdfc.xyz",
  "april.o37mr0twx4.monster",
  "adrian.bmndsgfxc.xyz",
  "claudia.tr9vznl3ca.monster",
  "naomi.yikjcvbdfg.xyz",
  "amanda.ryutghfdhhdf.xyz",
  "celia.o37mr0twx4.monster",
  "morgan.htgyrfhrf.xyz",
  "carlee.vbnmfhfdc.xyz",
  "misty.ytuiljhnvbh.xyz",
  "katlynn.adfvsergtbaf.xyz",
  "sadie.trugvfhjfg.xyz",
  "francheska.hgtghyktdfh.xyz",
  "celine.trugvfhjfg.xyz",
  "mara.adfvsergtbaf.xyz",
  "alexia.tryhfchgc.xyz",
  "elaina.5xunbtlxqb.monster",
  "iliana.ytuiljhnvbh.xyz",
  "0ky2g.app.link",
  "e986b6.dwerls.eu.org",
  "bb333aed.sewdo.eu.org",
  "cristina.adcfazdfc.xyz",
  "olga.htgyrfhrf.xyz",
  "hailey.fzuzj04e6n.monster",
  "gabriela.klkyfedrwere.xyz",
  "isabel.bnfdhcvb.xyz",
  "helena.0x8n2g2slw.monster",
  "kalie.trugvfhjfg.xyz",
  "kendra.htgyrfhrf.xyz",
  "annamarie.bmndsgfxc.xyz",
  "felicia.yikjcvbdfg.xyz",
  "imani.bnfdhcvb.xyz",
  "ayanna.7trp0c5oep.monster",
  "fatima.o37mr0twx4.monster",
  "iliana.bmndsgfxc.xyz",
  "aisha.ryutghfdhhdf.xyz",
  "896b5e.gartenleben.eu.org",
  "b651fe980.dwerls.eu.org",
  "danielle.yrcbdfhhfd.xyz",
  "eliza.5jnwb9k6op.monster",
  "madeleine.bvnfdhcbcb.xyz",
  "8024510.bait.sa.com",
  "15fbd7.kipoks.eu.org",
  "15942eca.sewdo.eu.org",
  "24bc42a.sunid.eu.org",
  "f29368aa90.sunid.eu.org",
  "682rb.app.link",
]);

export default BLACKLIST;
