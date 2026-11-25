import { SPRITE_SOURCES } from '../data/sprite-sources';
export async function readSite(){
 return {title:"Pokémon Name Gallery",description:"以 Pokémon 名称为起点的独立素材浏览与对照图库。",source:'https://github.com/wangrui2025/from-name',home:'https://wangrui2025.github.io/from-name/',limitations:['独立素材展示，不代表 Pokémon 官方。','外部素材可能缺失，来源支持范围以实际数据与上游许可为准。','本索引不读取浏览器中的个人选择。'],sections:[{title:'图库',url:'https://wangrui2025.github.io/from-name/',description:"从随机名称进入单图，再对照同一 Pokémon 的多来源素材。",items:SPRITE_SOURCES.map(s=>({title:s.name,url:s.url(1),description:[s.generation,s.format,s.size,'示例素材 URL（ID 1），并非完整可用性证明'].filter(Boolean).join(' · ')}))}]};
}
