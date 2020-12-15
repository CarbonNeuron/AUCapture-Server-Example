enum GameState
{
    LOBBY,
    TASKS,
    DISCUSSION,
    MENU,
    ENDED,
    UNKNOWN
}

enum PlayerAction
{
    Joined,
    Left,
    Died,
    ChangedColor,
    ForceUpdated,
    Disconnected,
    Exiled
}

enum PlayerColor
{
    Red,
    Blue,
    Green,
    Pink,
    Orange,
    Yellow,
    Black,
    White,
    Purple,
    Brown,
    Cyan,
    Lime
}

enum PlayRegion
{
    NorthAmerica,
    Asia,
    Europe
}

enum PlayMap
{
    Skeld,
    Mira,
    Polus
}

enum GameOverReason
{
    HumansByVote,
    HumansByTask,
    ImpostorByVote,
    ImpostorByKill,
    ImpostorBySabotage,
    ImpostorDisconnect,
    HumansDisconnect,
    Unknown
}

class PlayerChangedEvent
{
    Action: PlayerAction
    Name: string
    IsDead: boolean
    Disconnected: boolean
    Color: PlayerColor
}


class LobbyEvent
{
    LobbyCode: string
    Region: PlayRegion
    Map: PlayMap
}

class ImmutablePlayer
{
    Name: string
    IsImpostor: boolean
}

class GameOverEvent
{
    GameOverReason: GameOverReason
    PlayerInfos: ImmutablePlayer[]
}
