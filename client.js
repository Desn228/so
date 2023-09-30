
// создаем команды
Teams.Add("Special Forces "{ f: 1 });
Teams.Add("Terrorists " { r: 1 });
var blueTeam = Teams.Get("Special Forces");
var redTeam = Teams.Get("Terrorists");
blueTeam.Spawns.SpawnPointsGroups.Add(1);
redTeam.Spawns.SpawnPointsGroups.Add(2);
blueTeam.Build.BlocksSet.Value = BuildBlocksSet.Blue;
redTeam.Build.BlocksSet.Value = BuildBlocksSet.Red;

