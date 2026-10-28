// Example shown in the "CADTests in action" section.
// Source: CADTests_Claude-4.6-Sonnet_Abstract/samples/00682075/summary.json
// Each test: title, type (assertion type), passed, log (pass or failure message), code.
window.CADTESTS_EXAMPLE = {
  prompt: "Create a 3D object that resembles a three step pedestal. First, you can create a side profile of the pedestal. " +
    "You can do it by creating three rectangles joined to each other. First draw a big rectangle that will represent the base level. " +
    "On top of this draw a smaller rectangle that represents the second step. On top of this second rectangle draw a third, " +
    "even smaller rectangle, that represents the third step. Make sure the three rectangles are connected and form a closed shape. " +
    "Extrude this profile to get a 3D model of the three step pedestal.",
  // Generated model (binary STL), embedded so the viewer also works when index.html is opened from disk.
  // Source file: static/models/00682075_generated.stl
  modelData: "U1RMIEV4cG9ydGVkIGJ5IE9wZW4gQ0FTQ0FERSBUZWNobm9sb2d5IFtkZXYub3BlbmNhc2NhZGUub3JnXQAAAAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAgAAAAAAAAIC/AAA0QgAAAAAAAAAAAAA0wgAAtMIAAAAAAAA0wgAAAAAAAAAAAAAAAAAAAAAAgAAAgL8AADRCAAAAAAAAAAAAADRCAAC0wgAAAAAAADTCAAC0wgAAAAAAAAAAgD8AAAAAAAAAAAAANEIAAAAAAACgQQAANEIAALTCAAAAAAAANEIAAAAAAAAAAAAAAACAPwAAAAAAAAAAAAA0QgAAAAAAAKBBAAA0QgAAtMIAAKBBAAA0QgAAtMIAAAAAAAAAAACAAAAAAAAAgD8AAPBBAAAAAAAAoEEAADRCAAC0wgAAoEEAADRCAAAAAAAAoEEAAAAAAAAAAAAAAACAPwAA8EEAAAAAAACgQQAA8EEAALTCAACgQQAANEIAALTCAACgQQAAAACAPwAAAAAAAAAAAADwQQAAAAAAACBCAADwQQAAtMIAAKBBAADwQQAAAAAAAKBBAAAAAIA/AAAAAAAAAAAAAPBBAAAAAAAAIEIAAPBBAAC0wgAAIEIAAPBBAAC0wgAAoEEAAAAAAIAAAAAAAACAPwAAcEEAAAAAAAAgQgAA8EEAALTCAAAgQgAA8EEAAAAAAAAgQgAAAAAAAAAAAAAAAIA/AABwQQAAAAAAACBCAABwQQAAtMIAACBCAADwQQAAtMIAACBCAAAAAIA/AAAAAAAAAAAAAHBBAAAAAAAAcEIAAHBBAAC0wgAAIEIAAHBBAAAAAAAAIEIAAAAAgD8AAAAAAAAAAAAAcEEAAAAAAABwQgAAcEEAALTCAABwQgAAcEEAALTCAAAgQgAAAAAAAAAAAAAAAIA/AABwQQAAAAAAAHBCAABwwQAAtMIAAHBCAABwQQAAtMIAAHBCAAAAAACAAAAAAAAAgD8AAHDBAAAAAAAAcEIAAHDBAAC0wgAAcEIAAHBBAAAAAAAAcEIAAAAAgL8AAAAAAAAAAAAAcMEAAAAAAAAgQgAAcMEAALTCAABwQgAAcMEAAAAAAABwQgAAAACAvwAAAAAAAAAAAABwwQAAAAAAACBCAABwwQAAtMIAACBCAABwwQAAtMIAAHBCAAAAAACAAAAAAAAAgD8AAPDBAAAAAAAAIEIAAHDBAAC0wgAAIEIAAHDBAAAAAAAAIEIAAAAAAAAAAAAAAACAPwAA8MEAAAAAAAAgQgAA8MEAALTCAAAgQgAAcMEAALTCAAAgQgAAAACAvwAAAAAAAAAAAADwwQAAAAAAAKBBAADwwQAAtMIAACBCAADwwQAAAAAAACBCAAAAAIC/AAAAAAAAAAAAAPDBAAAAAAAAoEEAAPDBAAC0wgAAoEEAAPDBAAC0wgAAIEIAAAAAAIAAAAAAAACAPwAANMIAAAAAAACgQQAA8MEAALTCAACgQQAA8MEAAAAAAACgQQAAAAAAAAAAAAAAAIA/AAA0wgAAAAAAAKBBAAA0wgAAtMIAAKBBAADwwQAAtMIAAKBBAAAAAIC/AAAAAAAAAAAAADTCAAAAAAAAAAAAADTCAAC0wgAAoEEAADTCAAAAAAAAoEEAAAAAgL8AAAAAAAAAAAAANMIAAAAAAAAAAAAANMIAALTCAAAAAAAANMIAALTCAACgQQAAAAAAAAAAgD8AAAAAAADwwQAAAAAAAKBBAADwwQAAAAAAACBCAABwwQAAAAAAACBCAAAAAAAAAACAPwAAAAAAAHBBAAAAAAAAcEIAAHDBAAAAAAAAIEIAAHDBAAAAAAAAcEIAAAAAAAAAAIA/AAAAAAAANMIAAAAAAAAAAAAANMIAAAAAAACgQQAA8MEAAAAAAACgQQAAAAAAAAAAgD8AAACAAABwQQAAAAAAACBCAABwwQAAAAAAACBCAABwQQAAAAAAAHBCAAAAAAAAAACAPwAAAIAAAPBBAAAAAAAAoEEAAHBBAAAAAAAAIEIAAPBBAAAAAAAAIEIAAAAAAAAAAIA/AAAAAAAA8EEAAAAAAACgQQAA8MEAAAAAAACgQQAAcMEAAAAAAAAgQgAAAAAAAAAAgD8AAAAAAADwQQAAAAAAAKBBAABwwQAAAAAAACBCAABwQQAAAAAAACBCAAAAAAAAAACAPwAAAIAAADRCAAAAAAAAAAAAAPBBAAAAAAAAoEEAADRCAAAAAAAAoEEAAAAAAAAAAIA/AAAAAAAANEIAAAAAAAAAAAAANMIAAAAAAAAAAAAA8MEAAAAAAACgQQAAAAAAAAAAgD8AAAAAAAA0QgAAAAAAAAAAAADwwQAAAAAAAKBBAADwQQAAAAAAAKBBAAAAAAAAAACAvwAAAAAAAPDBAAC0wgAAoEEAAHDBAAC0wgAAIEIAAPDBAAC0wgAAIEIAAAAAAIAAAIC/AAAAAAAAcEEAALTCAABwQgAAcMEAALTCAABwQgAAcMEAALTCAAAgQgAAAAAAAAAAgL8AAAAAAAA0wgAAtMIAAAAAAADwwQAAtMIAAKBBAAA0wgAAtMIAAKBBAAAAAAAAAACAvwAAAAAAAHBBAAC0wgAAIEIAAHBBAAC0wgAAcEIAAHDBAAC0wgAAIEIAAAAAAAAAAIC/AAAAAAAA8EEAALTCAACgQQAA8EEAALTCAAAgQgAAcEEAALTCAAAgQgAAAAAAAAAAgL8AAAAAAADwQQAAtMIAAKBBAABwwQAAtMIAACBCAADwwQAAtMIAAKBBAAAAAAAAAACAvwAAAAAAAPBBAAC0wgAAoEEAAHBBAAC0wgAAIEIAAHDBAAC0wgAAIEIAAAAAAAAAAIC/AAAAAAAANEIAALTCAAAAAAAANEIAALTCAACgQQAA8EEAALTCAACgQQAAAAAAAAAAgL8AAAAAAAA0QgAAtMIAAAAAAADwwQAAtMIAAKBBAAA0wgAAtMIAAAAAAAAAAAAAAACAvwAAAAAAADRCAAC0wgAAAAAAAPBBAAC0wgAAoEEAAPDBAAC0wgAAoEEAAA==",
  tests: [
    {
      title: "Verifies the model is a single solid",
      type: "solid_shell_validity",
      passed: true,
      log: "Solid count is 1, matches expected 1 for a single pedestal",
      code:
`solid_count = final_result.solids().size()
check(
    solid_count == 1,
    f'Solid count is {solid_count}, matches expected 1 for a single pedestal',
    f'Three-step pedestal must be a single solid, found {solid_count} solids',
)`
    },
    {
      title: "Verifies the model has more planar faces than a simple box (at least 8)",
      type: "topology_checks",
      passed: true,
      log: "Planar face count is 14, which is more than a simple box (6), consistent with a stepped pedestal",
      code:
`planar_face_count = final_result.faces('%Plane').size()
check(
    planar_face_count >= 8,
    f'Planar face count is {planar_face_count}, which is more than a simple box (6), consistent with a stepped pedestal',
    f'Three-step pedestal must have at least 8 planar faces, found {planar_face_count}',
)`
    },
    {
      title: "Verifies the model has exactly 10 planar faces (consistent with a 3-step staircase extrusion)",
      type: "topology_checks",
      passed: false,
      log: "Three-step extruded pedestal should have 10 planar faces, found 14",
      code:
`planar_face_count = final_result.faces('%Plane').size()
check(
    planar_face_count == 10,
    f'Planar face count is {planar_face_count}, matches expected 10 for a 3-step extruded pedestal',
    f'Three-step extruded pedestal should have 10 planar faces, found {planar_face_count}',
)`
    },
    {
      title: "Verifies the total face count is exactly 8 (no curved faces expected)",
      type: "topology_checks",
      passed: true,
      log: "Total faces (14) equals planar faces (14), confirming no curved faces on the pedestal",
      code:
`total_face_count = final_result.faces().size()
planar_face_count = final_result.faces('%Plane').size()
check(
    total_face_count == planar_face_count,
    f'Total faces ({total_face_count}) equals planar faces ({planar_face_count}), confirming no curved faces on the pedestal',
    f'All faces should be planar (rectangular profile extruded), but total={total_face_count} and planar={planar_face_count}',
)`
    },
    {
      title: "Verifies the model has no circular/curved edges",
      type: "geometry_types",
      passed: true,
      log: "Circular edge count is 0, confirming no curves (all rectangular geometry)",
      code:
`circular_edge_count = final_result.edges('%Circle').size()
check(
    circular_edge_count == 0,
    f'Circular edge count is {circular_edge_count}, confirming no curves (all rectangular geometry)',
    f'Three-step pedestal from rectangles should have 0 circular edges, found {circular_edge_count}',
)`
    },
    {
      title: "Verifies the model has exactly 24 edges (consistent with a 3-step rectangular staircase extrusion)",
      type: "topology_checks",
      passed: false,
      log: "Three-step rectangular pedestal should have exactly 24 edges, found 36",
      code:
`edge_count = final_result.edges().size()
check(
    edge_count == 24,
    f'Edge count is {edge_count}, matches expected 24 for a 3-step rectangular extruded pedestal',
    f'Three-step rectangular pedestal should have exactly 24 edges, found {edge_count}',
)`
    },
    {
      title: "Verifies the model has exactly 16 vertices (consistent with a 3-step rectangular staircase extrusion)",
      type: "topology_checks",
      passed: false,
      log: "Three-step rectangular pedestal should have exactly 16 vertices, found 24",
      code:
`vertex_count = final_result.vertices().size()
check(
    vertex_count == 16,
    f'Vertex count is {vertex_count}, matches expected 16 for a 3-step rectangular extruded pedestal',
    f'Three-step rectangular pedestal should have exactly 16 vertices, found {vertex_count}',
)`
    },
    {
      title: "Verifies the volume is less than the bounding box volume (stepped shape leaves empty corners)",
      type: "volumetric_checks",
      passed: true,
      log: "Fill ratio is 0.6667, confirming the stepped pedestal does not fill its bounding box",
      code:
`bbox = final_result.val().BoundingBox()
bbox_volume = bbox.xlen * bbox.ylen * bbox.zlen
actual_volume = final_result.val().Volume()
fill_ratio = actual_volume / bbox_volume
check(
    fill_ratio < 0.99,
    f'Fill ratio is {fill_ratio:.4f}, confirming the stepped pedestal does not fill its bounding box',
    f'Three-step pedestal volume should be less than bounding box volume, fill ratio={fill_ratio:.4f}',
)`
    },
    {
      title: "Verifies the fill ratio is consistent with a 3-step staircase (between 0.3 and 0.85)",
      type: "volumetric_checks",
      passed: true,
      log: "Fill ratio is 0.6667, within expected range (0.3-0.95) for a 3-step pedestal",
      code:
`bbox = final_result.val().BoundingBox()
bbox_volume = bbox.xlen * bbox.ylen * bbox.zlen
actual_volume = final_result.val().Volume()
fill_ratio = actual_volume / bbox_volume
check(
    0.3 < fill_ratio < 0.95,
    f'Fill ratio is {fill_ratio:.4f}, within expected range (0.3-0.95) for a 3-step pedestal',
    f'Three-step pedestal fill ratio should be between 0.3 and 0.95, got {fill_ratio:.4f}',
)`
    },
    {
      title: "Verifies the model has a uniform depth (extrusion depth equals one bounding box dimension)",
      type: "dimensions_ratios",
      passed: true,
      log: "Smallest dimension is 60.000, model is non-degenerate in all 3 axes (extrusion is valid)",
      code:
`bbox = final_result.val().BoundingBox()
dims = sorted([bbox.xlen, bbox.ylen, bbox.zlen])
# For an extruded staircase: one dimension is the extrusion depth (uniform, not stepped)
# The profile spans two axes; the extrusion is along the third
# We check that the model is non-degenerate in all three axes
check(
    dims[0] > dims[2] * 0.01,
    f'Smallest dimension is {dims[0]:.3f}, model is non-degenerate in all 3 axes (extrusion is valid)',
    f'Model should be 3D with non-negligible depth in all axes, smallest dim={dims[0]:.3f} vs largest={dims[2]:.3f}',
)`
    },
    {
      title: "Verifies the model bounding box has a clear staircase aspect (height/width ratio implies stepped profile)",
      type: "dimensions_ratios",
      passed: true,
      log: "Largest/middle dimension ratio is 1.0000, confirming non-cube 3D shape",
      code:
`bbox = final_result.val().BoundingBox()
dims = sorted([bbox.xlen, bbox.ylen, bbox.zlen])
# The largest dimension divided by middle should not be trivially 1 (it's a stepped profile, not a cube)
ratio_large_to_mid = dims[2] / dims[1]
check(
    ratio_large_to_mid > 0.01,
    f'Largest/middle dimension ratio is {ratio_large_to_mid:.4f}, confirming non-cube 3D shape',
    f'Model should be a proper 3D shape, ratio={ratio_large_to_mid:.4f}',
)`
    },
    {
      title: "Verifies the shell count is exactly 1 (single closed shell)",
      type: "solid_shell_validity",
      passed: true,
      log: "Shell count is 1, confirming a single closed surface (as expected from a closed extruded profile)",
      code:
`shell_count = final_result.shells().size()
check(
    shell_count == 1,
    f'Shell count is {shell_count}, confirming a single closed surface (as expected from a closed extruded profile)',
    f'Three-step pedestal should have exactly 1 shell, found {shell_count}',
)`
    },
    {
      title: "Verifies all faces are planar (no cylindrical or other curved surfaces)",
      type: "geometry_types",
      passed: true,
      log: "Cylindrical face count is 0, confirming all 14 faces are planar as expected from a rectangular profile extrusion",
      code:
`total_faces = final_result.faces().size()
cylindrical_faces = final_result.faces('%Cylinder').size()
planar_faces = final_result.faces('%Plane').size()
check(
    cylindrical_faces == 0,
    f'Cylindrical face count is {cylindrical_faces}, confirming all {total_faces} faces are planar as expected from a rectangular profile extrusion',
    f'No cylindrical faces expected in a rectangular-profile extrusion, found {cylindrical_faces}',
)`
    },
    {
      title: "Verifies the volume is positive (the solid is non-degenerate)",
      type: "solid_shell_validity",
      passed: true,
      log: "Volume is 324000.0000 cubic units, confirming a valid non-degenerate solid",
      code:
`volume = final_result.val().Volume()
check(
    volume > 0,
    f'Volume is {volume:.4f} cubic units, confirming a valid non-degenerate solid',
    f'Three-step pedestal must have positive volume, found {volume:.4f}',
)`
    },
    {
      title: "Verifies each step is strictly smaller than the one below by checking the fill ratio implies three distinct step widths (not two equal + one different)",
      type: "dimensions_ratios",
      passed: false,
      log: "Three-step pedestal with progressively smaller steps must have 10 faces; found 14 (12 would indicate two equal-size upper steps)",
      code:
`# For a 3-step pedestal where steps are progressively smaller, the extrusion profile
# has a staircase shape on one side. If steps 2 and 3 are equal width, the profile
# has a flat vertical section instead of a step, changing the face count.
# The correct 3-step pedestal has exactly 10 faces; equal upper steps yields 12.
# We enforce face count == 10 to indirectly verify strictly decreasing steps.
# Additionally, we check that the fill ratio is less than 2/3 (=0.667),
# because equal upper steps yield fill ratio = 2/3 exactly.
bbox = final_result.val().BoundingBox()
bbox_volume = bbox.xlen * bbox.ylen * bbox.zlen
actual_volume = final_result.val().Volume()
fill_ratio = actual_volume / bbox_volume
# With strictly decreasing steps (e.g. widths w, w*2/3, w*1/3), fill ratio < 2/3
# With equal upper steps, fill ratio = exactly 2/3 = 0.6667
face_count = final_result.faces().size()
check(
    face_count == 10,
    f'Face count is {face_count} (expected 10), confirming three distinct step sizes (not two equal upper steps which would give 12 faces)',
    f'Three-step pedestal with progressively smaller steps must have 10 faces; found {face_count} (12 would indicate two equal-size upper steps)',
)`
    },
    {
      title: "Verifies all profile corners are right angles by checking that every edge in the model is parallel to one of the three bounding box axes (no diagonal edges from triangular shapes)",
      type: "geometry_types",
      passed: true,
      log: "All 36 edges are axis-aligned (no diagonal edges), confirming rectangular-only profile",
      code:
`import numpy as np
from cadquery import Vector

# Get all edges and check none are diagonal (all must be axis-aligned in the profile plane)
# Strategy: for each edge, get its tangent vector and check it aligns with one of 3 principal axes
# We identify the 3 principal axes from the bounding box orientation
bbox = final_result.val().BoundingBox()

edges = final_result.edges().vals()

def edge_direction(e):
    """Get normalized direction vector of a linear edge."""
    verts = e.Vertices()
    if len(verts) < 2:
        return None
    p1 = verts[0].Center()
    p2 = verts[-1].Center()
    dx = p2.x - p1.x
    dy = p2.y - p1.y
    dz = p2.z - p1.z
    length = math.sqrt(dx*dx + dy*dy + dz*dz)
    if length < 1e-10:
        return None
    return (abs(dx)/length, abs(dy)/length, abs(dz)/length)

# For a rectangular-only staircase, each edge direction must be nearly (1,0,0), (0,1,0), or (0,0,1)
diagonal_edges = 0
for e in edges:
    d = edge_direction(e)
    if d is None:
        continue
    # Check if the direction is axis-aligned (one component ~1, others ~0)
    max_component = max(d)
    if max_component < 0.99:  # Not axis-aligned => diagonal
        diagonal_edges += 1

check(
    diagonal_edges == 0,
    f'All {len(edges)} edges are axis-aligned (no diagonal edges), confirming rectangular-only profile',
    f'Found {diagonal_edges} diagonal edges; all steps must be rectangles (no triangular shapes allowed)',
)`
    },
  ],
};
