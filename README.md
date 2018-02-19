# Window Size

Your application lives in a window. This library helps you figure out how big that window is and when it changes size.

## Init
When your application starts, sending a command with the `Window.size` task will return with an update message of the initial window size.

```elm
type alias Model =
    Window.Size


type Msg
    = Resized Window.Size


init =
    ( Window.Size 0 0
    , Task.perform Resized Window.size
    )


update msg model =
    case msg of
        Resized size ->
            ( size, Cmd.none )

```

## Subscriptions
The window can change size when the user's phone is turned sideways, or the user changes the window size on a desktop.

Use the `Window.resizes` subscription to get updates when the window size changes.

```elm
type Msg
    = Resized Window.Size

subscriptions model =
    Window.resizes Resized
```
