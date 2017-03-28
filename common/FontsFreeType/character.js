/*
 * (c) Copyright Ascensio System SIA 2010-2017
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia,
 * EU, LV-1021.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

"use strict";

(function (window, undefined)
{

	/**
	 * @enum {number}
	 */
	var c_oUnicodeRangesLID = {
		Unknown:										0,
		Basic_Latin:                                    1,
		Latin_1_Supplement:                             2,
		Latin_Extended_A:                               3,
		Latin_Extended_B:                               4,
		IPA_Extensions:                                 5,
		Spacing_Modifier_Letters:                       6,
		Combining_Diacritical_Marks:                    7,
		Greek_and_Coptic:                               8,
		Cyrillic:                                       9,
		Cyrillic_Supplement:                            10,
		Armenian:                                       11,
		Hebrew:                                         12,
		Arabic:                                         13,
		Syriac:                                         14,
		Arabic_Supplement:                              15,
		Thaana:                                         16,
		NKo:                                            17,
		Samaritan:                                      18,
		Mandaic:                                        19,
		Arabic_Extended_A:                              20,
		Devanagari:                                     21,
		Bengali:                                        22,
		Gurmukhi:                                       23,
		Gujarati:                                       24,
		Oriya:                                          25,
		Tamil:                                          26,
		Telugu:                                         27,
		Kannada:                                        28,
		Malayalam:                                      29,
		Sinhala:                                        30,
		Thai:                                           31,
		Lao:                                            32,
		Tibetan:                                        33,
		Myanmar:                                        34,
		Georgian:                                       35,
		Hangul_Jamo:                                    36,
		Ethiopic:                                       37,
		Ethiopic_Supplement:                            38,
		Cherokee:                                       39,
		Unified_Canadian_Aboriginal_Syllabics:          40,
		Ogham:                                          41,
		Runic:                                          42,
		Tagalog:                                        43,
		Hanunoo:                                        44,
		Buhid:                                          45,
		Tagbanwa:                                       46,
		Khmer:                                          47,
		Mongolian:                                      48,
		Unified_Canadian_Aboriginal_Syllabics_Extended: 49,
		Limbu:                                          50,
		Tai_Le:                                         51,
		New_Tai_Lue:                                    52,
		Khmer_Symbols:                                  53,
		Buginese:                                       54,
		Tai_Tham:                                       55,
		Combining_Diacritical_Marks_Extended:           56,
		Balinese:                                       57,
		Sundanese:                                      58,
		Batak:                                          59,
		Lepcha:                                         60,
		Ol_Chiki:                                       61,
		Cyrillic_Extended_C:                            62,
		Sundanese_Supplement:                           63,
		Vedic_Extensions:                               64,
		Phonetic_Extensions:                            65,
		Phonetic_Extensions_Supplement:                 66,
		Combining_Diacritical_Marks_Supplement:         67,
		Latin_Extended_Additional:                      68,
		Greek_Extended:                                 69,
		General_Punctuation:                            70,
		Superscripts_and_Subscripts:                    71,
		Currency_Symbols:                               72,
		Combining_Diacritical_Marks_for_Symbols:        73,
		Letterlike_Symbols:                             74,
		Number_Forms:                                   75,
		Arrows:                                         76,
		Mathematical_Operators:                         77,
		Miscellaneous_Technical:                        78,
		Control_Pictures:                               79,
		Optical_Character_Recognition:                  80,
		Enclosed_Alphanumerics:                         81,
		Box_Drawing:                                    82,
		Block_Elements:                                 83,
		Geometric_Shapes:                               84,
		Miscellaneous_Symbols:                          85,
		Dingbats:                                       86,
		Miscellaneous_Mathematical_Symbols_A:           87,
		Supplemental_Arrows_A:                          88,
		Braille_Patterns:                               89,
		Supplemental_Arrows_B:                          90,
		Miscellaneous_Mathematical_Symbols_B:           91,
		Supplemental_Mathematical_Operators:            92,
		Miscellaneous_Symbols_and_Arrows:               93,
		Glagolitic:                                     94,
		Latin_Extended_C:                               95,
		Coptic:                                         96,
		Georgian_Supplement:                            97,
		Tifinagh:                                       98,
		Ethiopic_Extended:                              99,
		Cyrillic_Extended_A:                            100,
		Supplemental_Punctuation:                       101,
		CJK_Radicals_Supplement:                        102,
		Kangxi_Radicals:                                103,
		Ideographic_Description_Characters:             104,
		CJK_Symbols_and_Punctuation:                    105,
		Hiragana:                                       106,
		Katakana:                                       107,
		Bopomofo:                                       108,
		Hangul_Compatibility_Jamo:                      109,
		Kanbun:                                         110,
		Bopomofo_Extended:                              111,
		CJK_Strokes:                                    112,
		Katakana_Phonetic_Extensions:                   113,
		Enclosed_CJK_Letters_and_Months:                114,
		CJK_Compatibility:                              115,
		CJK_Unified_Ideographs_Extension:               116,
		Yijing_Hexagram_Symbols:                        117,
		CJK_Unified_Ideographs:                         118,
		Yi_Syllables:                                   119,
		Yi_Radicals:                                    120,
		Lisu:                                           121,
		Vai:                                            122,
		Cyrillic_Extended_B:                            123,
		Bamum:                                          124,
		Modifier_Tone_Letters:                          125,
		Latin_Extended_D:                               126,
		Syloti_Nagri:                                   127,
		Common_Indic_Number_Forms:                      128,
		Phags_pa:                                       129,
		Saurashtra:                                     130,
		Devanagari_Extended:                            131,
		Kayah_Li:                                       132,
		Rejang:                                         133,
		Hangul_Jamo_Extended_A:                         134,
		Javanese:                                       135,
		Myanmar_Extended_B:                             136,
		Cham:                                           137,
		Myanmar_Extended_A:                             138,
		Tai_Viet:                                       139,
		Meetei_Mayek_Extensions:                        140,
		Ethiopic_Extended_A:                            141,
		Latin_Extended_E:                               142,
		Cherokee_Supplement:                            143,
		Meetei_Mayek:                                   144,
		Hangul_Syllables:                               145,
		Hangul_Jamo_Extended_B:                         146,
		High_Surrogates:                                147,
		High_Private_Use_Surrogates:                    148,
		Low_Surrogates:                                 149,
		Private_Use_Area:                               150,
		CJK_Compatibility_Ideographs:                   151,
		Alphabetic_Presentation_Forms:                  152,
		Arabic_Presentation_Forms_A:                    153,
		Variation_Selectors:                            154,
		Vertical_Forms:                                 155,
		Combining_Half_Marks:                           156,
		CJK_Compatibility_Forms:                        157,
		Small_Form_Variants:                            158,
		Arabic_Presentation_Forms_B:                    159,
		Halfwidth_and_Fullwidth_Forms:                  160,
		Specials:                                       161,
		Linear_B_Syllabary:                             162,
		Linear_B_Ideograms:                             163,
		Aegean_Numbers:                                 164,
		Ancient_Greek_Numbers:                          165,
		Ancient_Symbols:                                166,
		Phaistos_Disc:                                  167,
		Lycian:                                         168,
		Carian:                                         169,
		Coptic_Epact_Numbers:                           170,
		Old_Italic:                                     171,
		Gothic:                                         172,
		Old_Permic:                                     173,
		Ugaritic:                                       174,
		Old_Persian:                                    175,
		Deseret:                                        176,
		Shavian:                                        177,
		Osmanya:                                        178,
		Osage:                                          179,
		Elbasan:                                        180,
		Caucasian_Albanian:                             181,
		Linear_A:                                       182,
		Cypriot_Syllabary:                              183,
		Imperial_Aramaic:                               184,
		Palmyrene:                                      185,
		Nabataean:                                      186,
		Hatran:                                         187,
		Phoenician:                                     188,
		Lydian:                                         189,
		Meroitic_Hieroglyphs:                           190,
		Meroitic_Cursive:                               191,
		Kharoshthi:                                     192,
		Old_South_Arabian:                              193,
		Old_North_Arabian:                              194,
		Manichaean:                                     195,
		Avestan:                                        196,
		Inscriptional_Parthian:                         197,
		Inscriptional_Pahlavi:                          198,
		Psalter_Pahlavi:                                199,
		Old_Turkic:                                     200,
		Old_Hungarian:                                  201,
		Rumi_Numeral_Symbols:                           202,
		Brahmi:                                         203,
		Kaithi:                                         204,
		Sora_Sompeng:                                   205,
		Chakma:                                         206,
		Mahajani:                                       207,
		Sharada:                                        208,
		Sinhala_Archaic_Numbers:                        209,
		Khojki:                                         210,
		Multani:                                        211,
		Khudawadi:                                      212,
		Grantha:                                        213,
		Newa:                                           214,
		Tirhuta:                                        215,
		Siddham:                                        216,
		Modi:                                           217,
		Mongolian_Supplement:                           218,
		Takri:                                          219,
		Ahom:                                           220,
		Warang_Citi:                                    221,
		Pau_Cin_Hau:                                    222,
		Bhaiksuki:                                      223,
		Marchen:                                        224,
		Cuneiform:                                      225,
		Cuneiform_Numbers_and_Punctuation:              226,
		Early_Dynastic_Cuneiform:                       227,
		Egyptian_Hieroglyphs:                           228,
		Anatolian_Hieroglyphs:                          229,
		Bamum_Supplement:                               230,
		Mro:                                            231,
		Bassa_Vah:                                      232,
		Pahawh_Hmong:                                   233,
		Miao:                                           234,
		Ideographic_Symbols_and_Punctuation:            235,
		Tangut:                                         236,
		Tangut_Components:                              237,
		Kana_Supplement:                                238,
		Duployan:                                       239,
		Shorthand_Format_Controls:                      240,
		Byzantine_Musical_Symbols:                      241,
		Musical_Symbols:                                242,
		Ancient_Greek_Musical_Notation:                 243,
		Tai_Xuan_Jing_Symbols:                          244,
		Counting_Rod_Numerals:                          245,
		Mathematical_Alphanumeric_Symbols:              246,
		Sutton_SignWriting:                             247,
		Glagolitic_Supplement:                          248,
		Mende_Kikakui:                                  249,
		Adlam:                                          250,
		Arabic_Mathematical_Alphabetic_Symbols:         251,
		Mahjong_Tiles:                                  252,
		Domino_Tiles:                                   253,
		Playing_Cards:                                  254,
		Enclosed_Alphanumeric_Supplement:               255,
		Enclosed_Ideographic_Supplement:                256,
		Miscellaneous_Symbols_and_Pictographs:          257,
		Emoticons:                                      258,
		Ornamental_Dingbats:                            259,
		Transport_and_Map_Symbols:                      260,
		Alchemical_Symbols:                             261,
		Geometric_Shapes_Extended:                      262,
		Supplemental_Arrows_C:                          263,
		Supplemental_Symbols_and_Pictographs:           264,
		CJK_Unified_Ideographs_Extension_B:             265,
		CJK_Unified_Ideographs_Extension_C:             266,
		CJK_Unified_Ideographs_Extension_D:             267,
		CJK_Unified_Ideographs_Extension_E:             268,
		CJK_Compatibility_Ideographs_Supplement:        269,
		Tags:                                           270,
		Variation_Selectors_Supplement:                 271,
		Supplementary_Private_Use_Area_A:               272,
		Supplementary_Private_Use_Area_B:               273
	};

	/**
	 * @param {_start} start range value
	 * @param {_end} end range value
	 * @param {_name} not used range name
	 * @param {_lid} language id for ooxml format
	 * @param {_picks} in os/2 font table: [ulUnicodeRange1, ulUnicodeRange2, ulUnicodeRange3, ulUnicodeRange4, ulCodePageRange1, ulCodePageRange2];
	 */
	function CRange(_start, _end, _name, _lid, _picks)
	{
		this.Start = _start;
		this.End = _end;
		this.Name = _name;
		this.Lid = _lid;
		this.Param = _picks;
	};

	var c_oUnicodeRanges = [
		new CRange(0x0000, 0x007F, c_oUnicodeRangesLID.Basic_Latin, lcid_enUS, []),
		new CRange(0x0080, 0x00FF, c_oUnicodeRangesLID.Latin_1_Supplement, lcid_unknown, []),
		new CRange(0x0100, 0x017F, c_oUnicodeRangesLID.Latin_Extended_A, lcid_unknown, []),
		new CRange(0x0180, 0x024F, c_oUnicodeRangesLID.Latin_Extended_B, lcid_unknown, []),
		new CRange(0x0250, 0x02AF, c_oUnicodeRangesLID.IPA_Extensions, lcid_unknown, []),
		new CRange(0x02B0, 0x02FF, c_oUnicodeRangesLID.Spacing_Modifier_Letters, lcid_unknown, []),
		new CRange(0x0300, 0x036F, c_oUnicodeRangesLID.Combining_Diacritical_Marks, lcid_unknown, []),
		new CRange(0x0370, 0x03FF, c_oUnicodeRangesLID.Greek_and_Coptic, lcid_elGR, []),
		new CRange(0x0400, 0x04FF, c_oUnicodeRangesLID.Cyrillic, lcid_ruRU, []),
		new CRange(0x0500, 0x052F, c_oUnicodeRangesLID.Cyrillic_Supplement, lcid_unknown, []),
		new CRange(0x0530, 0x058F, c_oUnicodeRangesLID.Armenian, lcid_hyAM, []),
		new CRange(0x0590, 0x05FF, c_oUnicodeRangesLID.Hebrew, lcid_heIL, []),
		new CRange(0x0600, 0x06FF, c_oUnicodeRangesLID.Arabic, lcid_ar, []),
		new CRange(0x0700, 0x074F, c_oUnicodeRangesLID.Syriac, lcid_syrSY, []),
		new CRange(0x0750, 0x077F, c_oUnicodeRangesLID.Arabic_Supplement, lcid_ar, []),
		new CRange(0x0780, 0x07BF, c_oUnicodeRangesLID.Thaana, lcid_dvMV, []),
		new CRange(0x07C0, 0x07FF, c_oUnicodeRangesLID.NKo, lcid_unknown, []),
		new CRange(0x0800, 0x083F, c_oUnicodeRangesLID.Samaritan, lcid_unknown, []),
		new CRange(0x0840, 0x085F, c_oUnicodeRangesLID.Mandaic, lcid_unknown, []),
		new CRange(0x08A0, 0x08FF, c_oUnicodeRangesLID.Arabic_Extended_A, lcid_ar, []),
		new CRange(0x0900, 0x097F, c_oUnicodeRangesLID.Devanagari, lcid_hiIN, []),
		new CRange(0x0980, 0x09FF, c_oUnicodeRangesLID.Bengali, lcid_bnIN, []),
		new CRange(0x0A00, 0x0A7F, c_oUnicodeRangesLID.Gurmukhi, lcid_paIN, []),
		new CRange(0x0A80, 0x0AFF, c_oUnicodeRangesLID.Gujarati, lcid_guIN, []),
		new CRange(0x0B00, 0x0B7F, c_oUnicodeRangesLID.Oriya, lcid_orIN, []),
		new CRange(0x0B80, 0x0BFF, c_oUnicodeRangesLID.Tamil, lcid_taIN, []),
		new CRange(0x0C00, 0x0C7F, c_oUnicodeRangesLID.Telugu, lcid_teIN, []),
		new CRange(0x0C80, 0x0CFF, c_oUnicodeRangesLID.Kannada, lcid_knIN, []),
		new CRange(0x0D00, 0x0D7F, c_oUnicodeRangesLID.Malayalam, lcid_mlIN, []),
		new CRange(0x0D80, 0x0DFF, c_oUnicodeRangesLID.Sinhala, lcid_siLK, []),
		new CRange(0x0E00, 0x0E7F, c_oUnicodeRangesLID.Thai, lcid_thTH, []),
		new CRange(0x0E80, 0x0EFF, c_oUnicodeRangesLID.Lao, lcid_loLA, []),
		new CRange(0x0F00, 0x0FFF, c_oUnicodeRangesLID.Tibetan, lcid_boBT, []),
		new CRange(0x1000, 0x109F, c_oUnicodeRangesLID.Myanmar, lcid_myMM, []),
		new CRange(0x10A0, 0x10FF, c_oUnicodeRangesLID.Georgian, lcid_kaGE, []),
		new CRange(0x1100, 0x11FF, c_oUnicodeRangesLID.Hangul_Jamo, lcid_koKR, []),
		new CRange(0x1200, 0x137F, c_oUnicodeRangesLID.Ethiopic, lcid_gazET, []),
		new CRange(0x1380, 0x139F, c_oUnicodeRangesLID.Ethiopic_Supplement, lcid_unknown, []),
		new CRange(0x13A0, 0x13FF, c_oUnicodeRangesLID.Cherokee, lcid_chrUS, []),
		new CRange(0x1400, 0x167F, c_oUnicodeRangesLID.Unified_Canadian_Aboriginal_Syllabics, lcid_iuCansCA, []),
		new CRange(0x1680, 0x169F, c_oUnicodeRangesLID.Ogham, lcid_unknown, []),
		new CRange(0x16A0, 0x16FF, c_oUnicodeRangesLID.Runic, lcid_unknown, []),
		new CRange(0x1700, 0x171F, c_oUnicodeRangesLID.Tagalog, lcid_filPH, []),
		new CRange(0x1720, 0x173F, c_oUnicodeRangesLID.Hanunoo, lcid_filPH, []),
		new CRange(0x1740, 0x175F, c_oUnicodeRangesLID.Buhid, lcid_filPH, []),
		new CRange(0x1760, 0x177F, c_oUnicodeRangesLID.Tagbanwa, lcid_filPH, []),
		new CRange(0x1780, 0x17FF, c_oUnicodeRangesLID.Khmer, lcid_kmKH, []),
		new CRange(0x1800, 0x18AF, c_oUnicodeRangesLID.Mongolian, lcid_mnMN, []),
		new CRange(0x18B0, 0x18FF, c_oUnicodeRangesLID.Unified_Canadian_Aboriginal_Syllabics_Extended, lcid_iuCansCA, []),
		new CRange(0x1900, 0x194F, c_oUnicodeRangesLID.Limbu, lcid_unknown, []),
		new CRange(0x1950, 0x197F, c_oUnicodeRangesLID.Tai_Le, lcid_unknown, []),
		new CRange(0x1980, 0x19DF, c_oUnicodeRangesLID.New_Tai_Lue, lcid_unknown, []),
		new CRange(0x19E0, 0x19FF, c_oUnicodeRangesLID.Khmer_Symbols, lcid_kmKH, []),
		new CRange(0x1A00, 0x1A1F, c_oUnicodeRangesLID.Buginese, lcid_unknown, []),
		new CRange(0x1A20, 0x1AAF, c_oUnicodeRangesLID.Tai_Tham, lcid_thTH, []),
		new CRange(0x1AB0, 0x1AFF, c_oUnicodeRangesLID.Combining_Diacritical_Marks_Extended, lcid_unknown, []),
		new CRange(0x1B00, 0x1B7F, c_oUnicodeRangesLID.Balinese, lcid_idID, []),
		new CRange(0x1B80, 0x1BBF, c_oUnicodeRangesLID.Sundanese, lcid_idID, []),
		new CRange(0x1BC0, 0x1BFF, c_oUnicodeRangesLID.Batak, lcid_idID, []),
		new CRange(0x1C00, 0x1C4F, c_oUnicodeRangesLID.Lepcha, lcid_unknown, []),
		new CRange(0x1C50, 0x1C7F, c_oUnicodeRangesLID.Ol_Chiki, lcid_unknown, []),
		new CRange(0x1C80, 0x1C8F, c_oUnicodeRangesLID.Cyrillic_Extended_C, lcid_unknown, []),
		new CRange(0x1CC0, 0x1CCF, c_oUnicodeRangesLID.Sundanese_Supplement, lcid_unknown, []),
		new CRange(0x1CD0, 0x1CFF, c_oUnicodeRangesLID.Vedic_Extensions, lcid_unknown, []),
		new CRange(0x1D00, 0x1D7F, c_oUnicodeRangesLID.Phonetic_Extensions, lcid_unknown, []),
		new CRange(0x1D80, 0x1DBF, c_oUnicodeRangesLID.Phonetic_Extensions_Supplement, lcid_unknown, []),
		new CRange(0x1DC0, 0x1DFF, c_oUnicodeRangesLID.Combining_Diacritical_Marks_Supplement, lcid_unknown, []),
		new CRange(0x1E00, 0x1EFF, c_oUnicodeRangesLID.Latin_Extended_Additional, lcid_unknown, []),
		new CRange(0x1F00, 0x1FFF, c_oUnicodeRangesLID.Greek_Extended, lcid_unknown, []),
		new CRange(0x2000, 0x206F, c_oUnicodeRangesLID.General_Punctuation, lcid_unknown, []),
		new CRange(0x2070, 0x209F, c_oUnicodeRangesLID.Superscripts_and_Subscripts, lcid_unknown, []),
		new CRange(0x20A0, 0x20CF, c_oUnicodeRangesLID.Currency_Symbols, lcid_unknown, []),
		new CRange(0x20D0, 0x20FF, c_oUnicodeRangesLID.Combining_Diacritical_Marks_for_Symbols, lcid_unknown, []),
		new CRange(0x2100, 0x214F, c_oUnicodeRangesLID.Letterlike_Symbols, lcid_unknown, []),
		new CRange(0x2150, 0x218F, c_oUnicodeRangesLID.Number_Forms, lcid_unknown, []),
		new CRange(0x2190, 0x21FF, c_oUnicodeRangesLID.Arrows, lcid_unknown, []),
		new CRange(0x2200, 0x22FF, c_oUnicodeRangesLID.Mathematical_Operators, lcid_unknown, []),
		new CRange(0x2300, 0x23FF, c_oUnicodeRangesLID.Miscellaneous_Technical, lcid_unknown, []),
		new CRange(0x2400, 0x243F, c_oUnicodeRangesLID.Control_Pictures, lcid_unknown, []),
		new CRange(0x2440, 0x245F, c_oUnicodeRangesLID.Optical_Character_Recognition, lcid_unknown, []),
		new CRange(0x2460, 0x24FF, c_oUnicodeRangesLID.Enclosed_Alphanumerics, lcid_unknown, []),
		new CRange(0x2500, 0x257F, c_oUnicodeRangesLID.Box_Drawing, lcid_unknown, []),
		new CRange(0x2580, 0x259F, c_oUnicodeRangesLID.Block_Elements, lcid_unknown, []),
		new CRange(0x25A0, 0x25FF, c_oUnicodeRangesLID.Geometric_Shapes, lcid_unknown, []),
		new CRange(0x2600, 0x26FF, c_oUnicodeRangesLID.Miscellaneous_Symbols, lcid_unknown, []),
		new CRange(0x2700, 0x27BF, c_oUnicodeRangesLID.Dingbats, lcid_unknown, []),
		new CRange(0x27C0, 0x27EF, c_oUnicodeRangesLID.Miscellaneous_Mathematical_Symbols_A, lcid_unknown, []),
		new CRange(0x27F0, 0x27FF, c_oUnicodeRangesLID.Supplemental_Arrows_A, lcid_unknown, []),
		new CRange(0x2800, 0x28FF, c_oUnicodeRangesLID.Braille_Patterns, lcid_unknown, []),
		new CRange(0x2900, 0x297F, c_oUnicodeRangesLID.Supplemental_Arrows_B, lcid_unknown, []),
		new CRange(0x2980, 0x29FF, c_oUnicodeRangesLID.Miscellaneous_Mathematical_Symbols_B, lcid_unknown, []),
		new CRange(0x2A00, 0x2AFF, c_oUnicodeRangesLID.Supplemental_Mathematical_Operators, lcid_unknown, []),
		new CRange(0x2B00, 0x2BFF, c_oUnicodeRangesLID.Miscellaneous_Symbols_and_Arrows, lcid_unknown, []),
		new CRange(0x2C00, 0x2C5F, c_oUnicodeRangesLID.Glagolitic, lcid_unknown, []),
		new CRange(0x2C60, 0x2C7F, c_oUnicodeRangesLID.Latin_Extended_C, lcid_unknown, []),
		new CRange(0x2C80, 0x2CFF, c_oUnicodeRangesLID.Coptic, lcid_unknown, []),
		new CRange(0x2D00, 0x2D2F, c_oUnicodeRangesLID.Georgian_Supplement, lcid_unknown, []),
		new CRange(0x2D30, 0x2D7F, c_oUnicodeRangesLID.Tifinagh, lcid_unknown, []),
		new CRange(0x2D80, 0x2DDF, c_oUnicodeRangesLID.Ethiopic_Extended, lcid_unknown, []),
		new CRange(0x2DE0, 0x2DFF, c_oUnicodeRangesLID.Cyrillic_Extended_A, lcid_unknown, []),
		new CRange(0x2E00, 0x2E7F, c_oUnicodeRangesLID.Supplemental_Punctuation, lcid_unknown, []),
		new CRange(0x2E80, 0x2EFF, c_oUnicodeRangesLID.CJK_Radicals_Supplement, lcid_unknown, []),
		new CRange(0x2F00, 0x2FDF, c_oUnicodeRangesLID.Kangxi_Radicals, lcid_unknown, []),
		new CRange(0x2FF0, 0x2FFF, c_oUnicodeRangesLID.Ideographic_Description_Characters, lcid_unknown, []),
		new CRange(0x3000, 0x303F, c_oUnicodeRangesLID.CJK_Symbols_and_Punctuation, lcid_unknown, []),
		new CRange(0x3040, 0x309F, c_oUnicodeRangesLID.Hiragana, lcid_jaJP, []),
		new CRange(0x30A0, 0x30FF, c_oUnicodeRangesLID.Katakana, lcid_jaJP, []),
		new CRange(0x3100, 0x312F, c_oUnicodeRangesLID.Bopomofo, lcid_unknown, []),
		new CRange(0x3130, 0x318F, c_oUnicodeRangesLID.Hangul_Compatibility_Jamo, lcid_unknown, []),
		new CRange(0x3190, 0x319F, c_oUnicodeRangesLID.Kanbun, lcid_zhCN, []),
		new CRange(0x31A0, 0x31BF, c_oUnicodeRangesLID.Bopomofo_Extended, lcid_unknown, []),
		new CRange(0x31C0, 0x31EF, c_oUnicodeRangesLID.CJK_Strokes, lcid_unknown, []),
		new CRange(0x31F0, 0x31FF, c_oUnicodeRangesLID.Katakana_Phonetic_Extensions, lcid_unknown, []),
		new CRange(0x3200, 0x32FF, c_oUnicodeRangesLID.Enclosed_CJK_Letters_and_Months, lcid_unknown, []),
		new CRange(0x3300, 0x33FF, c_oUnicodeRangesLID.CJK_Compatibility, lcid_unknown, []),
		new CRange(0x3400, 0x4DBF, c_oUnicodeRangesLID.CJK_Unified_Ideographs_Extension, lcid_unknown, []),
		new CRange(0x4DC0, 0x4DFF, c_oUnicodeRangesLID.Yijing_Hexagram_Symbols, lcid_unknown, []),
		new CRange(0x4E00, 0x9FFF, c_oUnicodeRangesLID.CJK_Unified_Ideographs, lcid_unknown, []),
		new CRange(0xA000, 0xA48F, c_oUnicodeRangesLID.Yi_Syllables, lcid_unknown, []),
		new CRange(0xA490, 0xA4CF, c_oUnicodeRangesLID.Yi_Radicals, lcid_unknown, []),
		new CRange(0xA4D0, 0xA4FF, c_oUnicodeRangesLID.Lisu, lcid_unknown, []),
		new CRange(0xA500, 0xA63F, c_oUnicodeRangesLID.Vai, lcid_unknown, []),
		new CRange(0xA640, 0xA69F, c_oUnicodeRangesLID.Cyrillic_Extended_B, lcid_unknown, []),
		new CRange(0xA6A0, 0xA6FF, c_oUnicodeRangesLID.Bamum, lcid_unknown, []),
		new CRange(0xA700, 0xA71F, c_oUnicodeRangesLID.Modifier_Tone_Letters, lcid_unknown, []),
		new CRange(0xA720, 0xA7FF, c_oUnicodeRangesLID.Latin_Extended_D, lcid_unknown, []),
		new CRange(0xA800, 0xA82F, c_oUnicodeRangesLID.Syloti_Nagri, lcid_unknown, []),
		new CRange(0xA830, 0xA83F, c_oUnicodeRangesLID.Common_Indic_Number_Forms, lcid_unknown, []),
		new CRange(0xA840, 0xA87F, c_oUnicodeRangesLID.Phags_pa, lcid_unknown, []),
		new CRange(0xA880, 0xA8DF, c_oUnicodeRangesLID.Saurashtra, lcid_unknown, []),
		new CRange(0xA8E0, 0xA8FF, c_oUnicodeRangesLID.Devanagari_Extended, lcid_unknown, []),
		new CRange(0xA900, 0xA92F, c_oUnicodeRangesLID.Kayah_Li, lcid_unknown, []),
		new CRange(0xA930, 0xA95F, c_oUnicodeRangesLID.Rejang, lcid_unknown, []),
		new CRange(0xA960, 0xA97F, c_oUnicodeRangesLID.Hangul_Jamo_Extended_A, lcid_unknown, []),
		new CRange(0xA980, 0xA9DF, c_oUnicodeRangesLID.Javanese, lcid_idID, []),
		new CRange(0xA9E0, 0xA9FF, c_oUnicodeRangesLID.Myanmar_Extended_B, lcid_unknown, []),
		new CRange(0xAA00, 0xAA5F, c_oUnicodeRangesLID.Cham, lcid_unknown, []),
		new CRange(0xAA60, 0xAA7F, c_oUnicodeRangesLID.Myanmar_Extended_A, lcid_unknown, []),
		new CRange(0xAA80, 0xAADF, c_oUnicodeRangesLID.Tai_Viet, lcid_unknown, []),
		new CRange(0xAAE0, 0xAAFF, c_oUnicodeRangesLID.Meetei_Mayek_Extensions, lcid_unknown, []),
		new CRange(0xAB00, 0xAB2F, c_oUnicodeRangesLID.Ethiopic_Extended_A, lcid_unknown, []),
		new CRange(0xAB30, 0xAB6F, c_oUnicodeRangesLID.Latin_Extended_E, lcid_unknown, []),
		new CRange(0xAB70, 0xABBF, c_oUnicodeRangesLID.Cherokee_Supplement, lcid_unknown, []),
		new CRange(0xABC0, 0xABFF, c_oUnicodeRangesLID.Meetei_Mayek, lcid_unknown, []),
		new CRange(0xAC00, 0xD7AF, c_oUnicodeRangesLID.Hangul_Syllables, lcid_unknown, []),
		new CRange(0xD7B0, 0xD7FF, c_oUnicodeRangesLID.Hangul_Jamo_Extended_B, lcid_unknown, []),
		new CRange(0xD800, 0xDB7F, c_oUnicodeRangesLID.High_Surrogates, lcid_unknown, []),
		new CRange(0xDB80, 0xDBFF, c_oUnicodeRangesLID.High_Private_Use_Surrogates, lcid_unknown, []),
		new CRange(0xDC00, 0xDFFF, c_oUnicodeRangesLID.Low_Surrogates, lcid_unknown, []),
		new CRange(0xE000, 0xF8FF, c_oUnicodeRangesLID.Private_Use_Area, lcid_unknown, []),
		new CRange(0xF900, 0xFAFF, c_oUnicodeRangesLID.CJK_Compatibility_Ideographs, lcid_unknown, []),
		new CRange(0xFB00, 0xFB4F, c_oUnicodeRangesLID.Alphabetic_Presentation_Forms, lcid_unknown, []),
		new CRange(0xFB50, 0xFDFF, c_oUnicodeRangesLID.Arabic_Presentation_Forms_A, lcid_unknown, []),
		new CRange(0xFE00, 0xFE0F, c_oUnicodeRangesLID.Variation_Selectors, lcid_unknown, []),
		new CRange(0xFE10, 0xFE1F, c_oUnicodeRangesLID.Vertical_Forms, lcid_unknown, []),
		new CRange(0xFE20, 0xFE2F, c_oUnicodeRangesLID.Combining_Half_Marks, lcid_unknown, []),
		new CRange(0xFE30, 0xFE4F, c_oUnicodeRangesLID.CJK_Compatibility_Forms, lcid_unknown, []),
		new CRange(0xFE50, 0xFE6F, c_oUnicodeRangesLID.Small_Form_Variants, lcid_unknown, []),
		new CRange(0xFE70, 0xFEFF, c_oUnicodeRangesLID.Arabic_Presentation_Forms_B, lcid_unknown, []),
		new CRange(0xFF00, 0xFFEF, c_oUnicodeRangesLID.Halfwidth_and_Fullwidth_Forms, lcid_unknown, []),
		new CRange(0xFFF0, 0xFFFF, c_oUnicodeRangesLID.Specials, lcid_unknown, []),
		new CRange(0x10000, 0x1007F, c_oUnicodeRangesLID.Linear_B_Syllabary, lcid_unknown, []),
		new CRange(0x10080, 0x100FF, c_oUnicodeRangesLID.Linear_B_Ideograms, lcid_unknown, []),
		new CRange(0x10100, 0x1013F, c_oUnicodeRangesLID.Aegean_Numbers, lcid_unknown, []),
		new CRange(0x10140, 0x1018F, c_oUnicodeRangesLID.Ancient_Greek_Numbers, lcid_unknown, []),
		new CRange(0x10190, 0x101CF, c_oUnicodeRangesLID.Ancient_Symbols, lcid_unknown, []),
		new CRange(0x101D0, 0x101FF, c_oUnicodeRangesLID.Phaistos_Disc, lcid_unknown, []),
		new CRange(0x10280, 0x1029F, c_oUnicodeRangesLID.Lycian, lcid_unknown, []),
		new CRange(0x102A0, 0x102DF, c_oUnicodeRangesLID.Carian, lcid_unknown, []),
		new CRange(0x102E0, 0x102FF, c_oUnicodeRangesLID.Coptic_Epact_Numbers, lcid_unknown, []),
		new CRange(0x10300, 0x1032F, c_oUnicodeRangesLID.Old_Italic, lcid_unknown, []),
		new CRange(0x10330, 0x1034F, c_oUnicodeRangesLID.Gothic, lcid_unknown, []),
		new CRange(0x10350, 0x1037F, c_oUnicodeRangesLID.Old_Permic, lcid_unknown, []),
		new CRange(0x10380, 0x1039F, c_oUnicodeRangesLID.Ugaritic, lcid_unknown, []),
		new CRange(0x103A0, 0x103DF, c_oUnicodeRangesLID.Old_Persian, lcid_unknown, []),
		new CRange(0x10400, 0x1044F, c_oUnicodeRangesLID.Deseret, lcid_unknown, []),
		new CRange(0x10450, 0x1047F, c_oUnicodeRangesLID.Shavian, lcid_unknown, []),
		new CRange(0x10480, 0x104AF, c_oUnicodeRangesLID.Osmanya, lcid_unknown, []),
		new CRange(0x104B0, 0x104FF, c_oUnicodeRangesLID.Osage, lcid_unknown, []),
		new CRange(0x10500, 0x1052F, c_oUnicodeRangesLID.Elbasan, lcid_unknown, []),
		new CRange(0x10530, 0x1056F, c_oUnicodeRangesLID.Caucasian_Albanian, lcid_unknown, []),
		new CRange(0x10600, 0x1077F, c_oUnicodeRangesLID.Linear_A, lcid_unknown, []),
		new CRange(0x10800, 0x1083F, c_oUnicodeRangesLID.Cypriot_Syllabary, lcid_unknown, []),
		new CRange(0x10840, 0x1085F, c_oUnicodeRangesLID.Imperial_Aramaic, lcid_unknown, []),
		new CRange(0x10860, 0x1087F, c_oUnicodeRangesLID.Palmyrene, lcid_unknown, []),
		new CRange(0x10880, 0x108AF, c_oUnicodeRangesLID.Nabataean, lcid_unknown, []),
		new CRange(0x108E0, 0x108FF, c_oUnicodeRangesLID.Hatran, lcid_unknown, []),
		new CRange(0x10900, 0x1091F, c_oUnicodeRangesLID.Phoenician, lcid_unknown, []),
		new CRange(0x10920, 0x1093F, c_oUnicodeRangesLID.Lydian, lcid_unknown, []),
		new CRange(0x10980, 0x1099F, c_oUnicodeRangesLID.Meroitic_Hieroglyphs, lcid_unknown, []),
		new CRange(0x109A0, 0x109FF, c_oUnicodeRangesLID.Meroitic_Cursive, lcid_unknown, []),
		new CRange(0x10A00, 0x10A5F, c_oUnicodeRangesLID.Kharoshthi, lcid_unknown, []),
		new CRange(0x10A60, 0x10A7F, c_oUnicodeRangesLID.Old_South_Arabian, lcid_unknown, []),
		new CRange(0x10A80, 0x10A9F, c_oUnicodeRangesLID.Old_North_Arabian, lcid_unknown, []),
		new CRange(0x10AC0, 0x10AFF, c_oUnicodeRangesLID.Manichaean, lcid_unknown, []),
		new CRange(0x10B00, 0x10B3F, c_oUnicodeRangesLID.Avestan, lcid_unknown, []),
		new CRange(0x10B40, 0x10B5F, c_oUnicodeRangesLID.Inscriptional_Parthian, lcid_unknown, []),
		new CRange(0x10B60, 0x10B7F, c_oUnicodeRangesLID.Inscriptional_Pahlavi, lcid_unknown, []),
		new CRange(0x10B80, 0x10BAF, c_oUnicodeRangesLID.Psalter_Pahlavi, lcid_unknown, []),
		new CRange(0x10C00, 0x10C4F, c_oUnicodeRangesLID.Old_Turkic, lcid_unknown, []),
		new CRange(0x10C80, 0x10CFF, c_oUnicodeRangesLID.Old_Hungarian, lcid_unknown, []),
		new CRange(0x10E60, 0x10E7F, c_oUnicodeRangesLID.Rumi_Numeral_Symbols, lcid_unknown, []),
		new CRange(0x11000, 0x1107F, c_oUnicodeRangesLID.Brahmi, lcid_unknown, []),
		new CRange(0x11080, 0x110CF, c_oUnicodeRangesLID.Kaithi, lcid_unknown, []),
		new CRange(0x110D0, 0x110FF, c_oUnicodeRangesLID.Sora_Sompeng, lcid_unknown, []),
		new CRange(0x11100, 0x1114F, c_oUnicodeRangesLID.Chakma, lcid_unknown, []),
		new CRange(0x11150, 0x1117F, c_oUnicodeRangesLID.Mahajani, lcid_unknown, []),
		new CRange(0x11180, 0x111DF, c_oUnicodeRangesLID.Sharada, lcid_unknown, []),
		new CRange(0x111E0, 0x111FF, c_oUnicodeRangesLID.Sinhala_Archaic_Numbers, lcid_unknown, []),
		new CRange(0x11200, 0x1124F, c_oUnicodeRangesLID.Khojki, lcid_unknown, []),
		new CRange(0x11280, 0x112AF, c_oUnicodeRangesLID.Multani, lcid_unknown, []),
		new CRange(0x112B0, 0x112FF, c_oUnicodeRangesLID.Khudawadi, lcid_unknown, []),
		new CRange(0x11300, 0x1137F, c_oUnicodeRangesLID.Grantha, lcid_unknown, []),
		new CRange(0x11400, 0x1147F, c_oUnicodeRangesLID.Newa, lcid_unknown, []),
		new CRange(0x11480, 0x114DF, c_oUnicodeRangesLID.Tirhuta, lcid_unknown, []),
		new CRange(0x11580, 0x115FF, c_oUnicodeRangesLID.Siddham, lcid_unknown, []),
		new CRange(0x11600, 0x1165F, c_oUnicodeRangesLID.Modi, lcid_unknown, []),
		new CRange(0x11660, 0x1167F, c_oUnicodeRangesLID.Mongolian_Supplement, lcid_unknown, []),
		new CRange(0x11680, 0x116CF, c_oUnicodeRangesLID.Takri, lcid_unknown, []),
		new CRange(0x11700, 0x1173F, c_oUnicodeRangesLID.Ahom, lcid_unknown, []),
		new CRange(0x118A0, 0x118FF, c_oUnicodeRangesLID.Warang_Citi, lcid_unknown, []),
		new CRange(0x11AC0, 0x11AFF, c_oUnicodeRangesLID.Pau_Cin_Hau, lcid_unknown, []),
		new CRange(0x11C00, 0x11C6F, c_oUnicodeRangesLID.Bhaiksuki, lcid_unknown, []),
		new CRange(0x11C70, 0x11CBF, c_oUnicodeRangesLID.Marchen, lcid_unknown, []),
		new CRange(0x12000, 0x123FF, c_oUnicodeRangesLID.Cuneiform, lcid_unknown, []),
		new CRange(0x12400, 0x1247F, c_oUnicodeRangesLID.Cuneiform_Numbers_and_Punctuation, lcid_unknown, []),
		new CRange(0x12480, 0x1254F, c_oUnicodeRangesLID.Early_Dynastic_Cuneiform, lcid_unknown, []),
		new CRange(0x13000, 0x1342F, c_oUnicodeRangesLID.Egyptian_Hieroglyphs, lcid_unknown, []),
		new CRange(0x14400, 0x1467F, c_oUnicodeRangesLID.Anatolian_Hieroglyphs, lcid_unknown, []),
		new CRange(0x16800, 0x16A3F, c_oUnicodeRangesLID.Bamum_Supplement, lcid_unknown, []),
		new CRange(0x16A40, 0x16A6F, c_oUnicodeRangesLID.Mro, lcid_unknown, []),
		new CRange(0x16AD0, 0x16AFF, c_oUnicodeRangesLID.Bassa_Vah, lcid_unknown, []),
		new CRange(0x16B00, 0x16B8F, c_oUnicodeRangesLID.Pahawh_Hmong, lcid_unknown, []),
		new CRange(0x16F00, 0x16F9F, c_oUnicodeRangesLID.Miao, lcid_zhCN, []),
		new CRange(0x16FE0, 0x16FFF, c_oUnicodeRangesLID.Ideographic_Symbols_and_Punctuation, lcid_unknown, []),
		new CRange(0x17000, 0x187FF, c_oUnicodeRangesLID.Tangut, lcid_unknown, []),
		new CRange(0x18800, 0x18AFF, c_oUnicodeRangesLID.Tangut_Components, lcid_unknown, []),
		new CRange(0x1B000, 0x1B0FF, c_oUnicodeRangesLID.Kana_Supplement, lcid_unknown, []),
		new CRange(0x1BC00, 0x1BC9F, c_oUnicodeRangesLID.Duployan, lcid_unknown, []),
		new CRange(0x1BCA0, 0x1BCAF, c_oUnicodeRangesLID.Shorthand_Format_Controls, lcid_unknown, []),
		new CRange(0x1D000, 0x1D0FF, c_oUnicodeRangesLID.Byzantine_Musical_Symbols, lcid_unknown, []),
		new CRange(0x1D100, 0x1D1FF, c_oUnicodeRangesLID.Musical_Symbols, lcid_unknown, []),
		new CRange(0x1D200, 0x1D24F, c_oUnicodeRangesLID.Ancient_Greek_Musical_Notation, lcid_unknown, []),
		new CRange(0x1D300, 0x1D35F, c_oUnicodeRangesLID.Tai_Xuan_Jing_Symbols, lcid_unknown, []),
		new CRange(0x1D360, 0x1D37F, c_oUnicodeRangesLID.Counting_Rod_Numerals, lcid_unknown, []),
		new CRange(0x1D400, 0x1D7FF, c_oUnicodeRangesLID.Mathematical_Alphanumeric_Symbols, lcid_unknown, []),
		new CRange(0x1D800, 0x1DAAF, c_oUnicodeRangesLID.Sutton_SignWriting, lcid_unknown, []),
		new CRange(0x1E000, 0x1E02F, c_oUnicodeRangesLID.Glagolitic_Supplement, lcid_unknown, []),
		new CRange(0x1E800, 0x1E8DF, c_oUnicodeRangesLID.Mende_Kikakui, lcid_unknown, []),
		new CRange(0x1E900, 0x1E95F, c_oUnicodeRangesLID.Adlam, lcid_unknown, []),
		new CRange(0x1EE00, 0x1EEFF, c_oUnicodeRangesLID.Arabic_Mathematical_Alphabetic_Symbols, lcid_unknown, []),
		new CRange(0x1F000, 0x1F02F, c_oUnicodeRangesLID.Mahjong_Tiles, lcid_unknown, []),
		new CRange(0x1F030, 0x1F09F, c_oUnicodeRangesLID.Domino_Tiles, lcid_unknown, []),
		new CRange(0x1F0A0, 0x1F0FF, c_oUnicodeRangesLID.Playing_Cards, lcid_unknown, []),
		new CRange(0x1F100, 0x1F1FF, c_oUnicodeRangesLID.Enclosed_Alphanumeric_Supplement, lcid_unknown, []),
		new CRange(0x1F200, 0x1F2FF, c_oUnicodeRangesLID.Enclosed_Ideographic_Supplement, lcid_unknown, []),
		new CRange(0x1F300, 0x1F5FF, c_oUnicodeRangesLID.Miscellaneous_Symbols_and_Pictographs, lcid_unknown, []),
		new CRange(0x1F600, 0x1F64F, c_oUnicodeRangesLID.Emoticons, lcid_unknown, []),
		new CRange(0x1F650, 0x1F67F, c_oUnicodeRangesLID.Ornamental_Dingbats, lcid_unknown, []),
		new CRange(0x1F680, 0x1F6FF, c_oUnicodeRangesLID.Transport_and_Map_Symbols, lcid_unknown, []),
		new CRange(0x1F700, 0x1F77F, c_oUnicodeRangesLID.Alchemical_Symbols, lcid_unknown, []),
		new CRange(0x1F780, 0x1F7FF, c_oUnicodeRangesLID.Geometric_Shapes_Extended, lcid_unknown, []),
		new CRange(0x1F800, 0x1F8FF, c_oUnicodeRangesLID.Supplemental_Arrows_C, lcid_unknown, []),
		new CRange(0x1F900, 0x1F9FF, c_oUnicodeRangesLID.Supplemental_Symbols_and_Pictographs, lcid_unknown, []),
		new CRange(0x20000, 0x2A6DF, c_oUnicodeRangesLID.CJK_Unified_Ideographs_Extension_B, lcid_unknown, []),
		new CRange(0x2A700, 0x2B73F, c_oUnicodeRangesLID.CJK_Unified_Ideographs_Extension_C, lcid_unknown, []),
		new CRange(0x2B740, 0x2B81F, c_oUnicodeRangesLID.CJK_Unified_Ideographs_Extension_D, lcid_unknown, []),
		new CRange(0x2B820, 0x2CEAF, c_oUnicodeRangesLID.CJK_Unified_Ideographs_Extension_E, lcid_unknown, []),
		new CRange(0x2F800, 0x2FA1F, c_oUnicodeRangesLID.CJK_Compatibility_Ideographs_Supplement, lcid_unknown, []),
		new CRange(0xE0000, 0xE007F, c_oUnicodeRangesLID.Tags, lcid_unknown, []),
		new CRange(0xE0100, 0xE01EF, c_oUnicodeRangesLID.Variation_Selectors_Supplement, lcid_unknown, []),
		new CRange(0xF0000, 0xFFFFF, c_oUnicodeRangesLID.Supplementary_Private_Use_Area_A, lcid_unknown, []),
		new CRange(0x100000, 0x10FFFF, c_oUnicodeRangesLID.Supplementary_Private_Use_Area_B, lcid_unknown, [])
	];

})(window);


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
