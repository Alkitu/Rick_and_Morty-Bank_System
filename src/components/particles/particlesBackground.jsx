import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <Particles
      className='-z-10 h-full'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: 'transparent'
          }
        },
        fullScreen: {
          enable: false
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: 'push'
            },
            onHover: {
              enable: false,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },

        particles: {
          life: {
          duration: {
            sync: false,
            value: 5
          },
        },
          twinkle: {
            lines: {
              enable: true,
              frequency: 5,
              opacity: 1
            },
            particles: {
              enable: true,
              frequency: 0.5,
              opacity: 0.5
            }
          },
          color: {
            value: ['#FFFFFF']
          },
          links: {
            color: {
              value: ['#FFFFFF']
            },
            distance: 50,
            enable: false,
            opacity: 0.25,
            width: 0.5
          },
          collisions: {
            enable: false
          },
          move: {
            directions: 'top',
            enable: true,
            speed: 0.009,
          },
          number: {
            density: {
              enable: true,
              area: 1000
            },
            value: 200
          },
          opacity: {
            value: {
              max: 0.8,
              min: 0
            }
          },
          shape: {
            type: 'star'
          },
          size: {
            value: { min: 0.5, max: 1 }
          }
        },
        detectRetina: true
      }}
    />
  )
}

export default ParticlesBackground
