/*
 * Copyright 2019 Teralytics
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

export interface Location {
  id: string;
  lon: string;
  lat: string;
  name: string;
}

export interface Flow {
  origin: string;
  dest: string;
  count: string;
}

export const getFlowMagnitude = (flow: Flow) => +flow.count;
export const getFlowOriginId = (flow: Flow) => flow.origin;
export const getFlowDestId = (flow: Flow) => flow.dest;
export const getLocationId = (loc: Location) => loc.id;
export const getLocationCentroid = (location: Location): [number, number] => [+location.lon, +location.lat];
