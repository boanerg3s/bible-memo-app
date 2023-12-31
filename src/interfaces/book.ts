declare namespace Bible {
  export type Book =
    | "GN"
    | "EX"
    | "LV"
    | "NM"
    | "DT"
    | "JS"
    | "JG"
    | "RT"
    | "1SM"
    | "2SM"
    | "1KGS"
    | "2KGS"
    | "1CH"
    | "2CH"
    | "EZR"
    | "NEH"
    | "EST"
    | "JOB"
    | "PS"
    | "PROV"
    | "ECC"
    | "SONG"
    | "ISA"
    | "JER"
    | "LAM"
    | "EZK"
    | "DAN"
    | "HOS"
    | "JOL"
    | "AM"
    | "OBAD"
    | "JON"
    | "MIC"
    | "NAH"
    | "HAB"
    | "ZEPH"
    | "HAG"
    | "ZEC"
    | "MAL"
    | "MT"
    | "MK"
    | "LK"
    | "JN"
    | "ACTS"
    | "ROM"
    | "1COR"
    | "2COR"
    | "GAL"
    | "EPH"
    | "PHIL"
    | "COL"
    | "1THES"
    | "2THES"
    | "1TIM"
    | "2TIM"
    | "TITUS"
    | "PHLM"
    | "HEB"
    | "JAS"
    | "1PET"
    | "2PET"
    | "1JN"
    | "2JN"
    | "3JN"
    | "JUDE"
    | "REV";

  // { chapter: versesQty }
  export interface BookDefinition {
    versesQtyByChapter: Record<number, number>;
  }
}
