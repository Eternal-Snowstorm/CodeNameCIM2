#version 150

#moj_import <fog.glsl>

uniform vec4 ColorModulator;
uniform float FogStart;
uniform float FogEnd;
uniform float GameTime;
uniform vec4 FogColor;

in float vertexDistance;
in vec4 vertexColor;

out vec4 fragColor;

void main() {
	if(vertexColor.r < 1.0 && vertexColor.g < 1.0 && vertexColor.b < 1.0 && vertexColor.a > 0.35 && vertexColor.a < 0.41) {
		float speed = 1200.0;
		float phase = GameTime * speed;
		float phaseStep = 2.0944;
		float red = sin(phase) * 0.5 + 0.5;
		float green = sin(phase + phaseStep) * 0.5 + 0.5;
		float blue = sin(phase + 2.0 * phaseStep) * 0.5 + 0.5;
		fragColor = vec4(pow(red, 2.0), pow(green, 2.0), pow(blue, 2.0), 1.0);
	} else {
		vec4 color = vertexColor * ColorModulator;
		fragColor = linear_fog(color, vertexDistance, FogStart, FogEnd, FogColor);
	}
}