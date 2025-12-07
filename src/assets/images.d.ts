// declare module './classroom.png'

// declare module './night.png'
// declare module './sun_light.png'

/// in typeScript importing images is a bit tricky so we must write this code

declare module '*.png' {
    const value: string;
    export default value;
}