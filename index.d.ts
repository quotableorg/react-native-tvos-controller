export const connect: () => void;

export const enablePanGesture: () => void;
export const disablePanGesture: () => void;
export const enableRecognizeSimultaneously: () => void;
export const disableRecognizeSimultaneously: () => void;

export type CancelSubscription = () => void;
export interface PanEvent {
    state: "Began" | "Changed" | "Ended";
    x: number;
    velocityX: number;
    y: number;
    velocityY: number;
}
export interface TapEvent {
    type:
        | "PlayPause"
        | "Menu"
        | "Select"
        | "UpArrow"
        | "DownArrow"
        | "LeftArrow"
        | "RightArrow";
    code: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}
export function subscribe(
    eventType: "PAN",
    handler: (event: PanEvent) => void
): CancelSubscription;

export function subscribe(
    eventType: "TAP",
    handler: (event: TapEvent) => void
): CancelSubscription;